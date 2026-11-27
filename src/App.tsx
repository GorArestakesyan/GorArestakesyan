import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Contact from "./components/Contact";
import { PERSONAL_INFO } from "./constants";
import { useReveal, useSpotlight } from "./hooks/useMotion";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  useSpotlight();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to experience
      </a>
      <div className="progress" aria-hidden="true" />
      <div className="backdrop" aria-hidden="true">
        <span className="aurora aurora-1" />
        <span className="aurora aurora-2" />
        <span className="aurora aurora-3" />
      </div>
      <Analytics />
      <Navigation />
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {PERSONAL_INFO.COPYRIGHT_YEAR} {PERSONAL_INFO.NAME}
          </p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}

export default App;
