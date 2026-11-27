import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Absolute site URL for SEO tags. Set SITE_URL to a custom domain; on Vercel
 * it falls back to the project's production domain automatically.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.SITE_URL
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const url = explicit || (vercel ? `https://${vercel}` : '')
  return url.replace(/\/+$/, '')
}

/**
 * Fills %SITE_URL% in index.html and, when a URL is known, emits
 * sitemap.xml and a robots.txt that points to it. Without a URL the
 * absolute-only tags (canonical, og:url) are dropped instead of shipping
 * a broken value.
 */
function siteUrl(): Plugin {
  const site = resolveSiteUrl()
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      if (site) return html.replaceAll('%SITE_URL%', site)
      return html
        .replace(/\s*<link rel="canonical"[^>]*>/, '')
        .replace(/\s*<meta property="og:url"[^>]*>/, '')
        .replaceAll('%SITE_URL%', '')
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (site) {
        robots.push('', `Sitemap: ${site}/sitemap.xml`)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}/</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>
</urlset>
`,
        })
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrl()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
