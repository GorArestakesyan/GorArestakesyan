import { useEffect, useRef } from "react";

type Dot = { ox: number; oy: number; x: number; y: number; glow: number };
type Wave = { x: number; y: number; start: number };
type Packet = { row: number; x: number; speed: number; dir: 1 | -1 };

const GAP = 26;
const CURSOR_R = 170;
const PUSH = 18;
const WAVE_SPEED = 0.55; // px per ms
const WAVE_LIFE = 1400; // ms
const PACKET_EVERY = 700; // ms

const hexToRgb = (hex: string) => {
  const h = hex.trim().replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

/**
 * Interactive dot grid: dots part around the cursor, "event packets" stream
 * along rows, and a click sends a shockwave. Drawn on one canvas, paused
 * when off-screen or the tab is hidden.
 */
export default function SignalField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let dots: Dot[] = [];
    let waves: Wave[] = [];
    let packets: Packet[] = [];
    let lastPacket = 0;
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };
    let base = [255, 255, 255];
    let hot = [255, 107, 61];
    let hot2 = [255, 61, 113];

    const readColors = () => {
      const css = getComputedStyle(document.documentElement);
      const dark = document.documentElement.classList.contains("dark");
      base = dark ? [246, 242, 238] : [22, 18, 15];
      hot = hexToRgb(css.getPropertyValue("--a1") || "#ff6b3d");
      hot2 = hexToRgb(css.getPropertyValue("--a2") || "#ff3d71");
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1;
      rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = offX + c * GAP;
          const oy = offY + r * GAP;
          dots.push({ ox, oy, x: ox, y: oy, glow: 0 });
        }
      }
      if (reduceMotion) draw(performance.now());
    };

    const spawnPacket = () => {
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      packets.push({
        row: Math.floor(Math.random() * rows),
        x: dir === 1 ? -60 : w + 60,
        speed: 0.25 + Math.random() * 0.3,
        dir,
      });
    };

    let prev = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(now - prev, 50);
      prev = now;

      if (!reduceMotion && now - lastPacket > PACKET_EVERY) {
        lastPacket = now;
        spawnPacket();
      }
      packets.forEach((p) => (p.x += p.speed * dt * p.dir));
      packets = packets.filter((p) => p.x > -120 && p.x < w + 120);
      waves = waves.filter((wv) => now - wv.start < WAVE_LIFE);

      ctx.clearRect(0, 0, w, h);
      const [br, bg, bb] = base;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let tx = d.ox;
        let ty = d.oy;
        let glow = 0;

        // Cursor: push dots outward and light them up.
        const mx = d.ox - mouse.x;
        const my = d.oy - mouse.y;
        const md = Math.hypot(mx, my);
        if (md < CURSOR_R && md > 0.01) {
          const f = 1 - md / CURSOR_R;
          const eased = f * f;
          tx += (mx / md) * eased * PUSH;
          ty += (my / md) * eased * PUSH;
          glow = Math.max(glow, eased);
        }

        // Click shockwaves.
        for (const wv of waves) {
          const age = now - wv.start;
          const radius = age * WAVE_SPEED;
          const wx = d.ox - wv.x;
          const wy = d.oy - wv.y;
          const wd = Math.hypot(wx, wy) || 1;
          const band = 1 - Math.abs(wd - radius) / 46;
          if (band > 0) {
            const life = 1 - age / WAVE_LIFE;
            tx += (wx / wd) * band * 14 * life;
            ty += (wy / wd) * band * 14 * life;
            glow = Math.max(glow, band * life);
          }
        }

        // Event packets travelling along a row leave a fading trail.
        const row = Math.floor(i / cols);
        for (const p of packets) {
          if (p.row !== row) continue;
          const behind = (p.x - d.ox) * p.dir;
          if (behind > -6 && behind < 150) {
            glow = Math.max(glow, behind < 6 ? 1 : 1 - behind / 150);
          }
        }

        d.x += (tx - d.x) * 0.16;
        d.y += (ty - d.y) * 0.16;
        d.glow += (glow - d.glow) * 0.2;

        if (d.glow < 0.04) {
          ctx.fillStyle = `rgba(${br},${bg},${bb},0.13)`;
          ctx.fillRect(d.x - 0.75, d.y - 0.75, 1.5, 1.5);
        } else {
          const g = d.glow;
          const t = Math.min(1, d.ox / Math.max(w, 1));
          const r = hot[0] + (hot2[0] - hot[0]) * t;
          const gg = hot[1] + (hot2[1] - hot[1]) * t;
          const b = hot[2] + (hot2[2] - hot[2]) * t;
          ctx.fillStyle = `rgba(${r | 0},${gg | 0},${b | 0},${0.18 + g * 0.82})`;
          const s = 1.5 + g * 2.2;
          ctx.beginPath();
          ctx.arc(d.x, d.y, s / 2 + 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduceMotion || raf || !visible || document.hidden) return;
      prev = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      waves.push({ x: e.clientX - r.left, y: e.clientY - r.top, start: performance.now() });
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    readColors();
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(host);
    const mo = new MutationObserver(() => {
      readColors();
      if (reduceMotion) draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="signal-field" aria-hidden="true" />;
}
