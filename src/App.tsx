import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";
import { PERSONAL_INFO } from "./constants";
import { Analytics } from "@vercel/analytics/next";
import "./App.css";

function App() {
  useTheme(); // Initialize theme

  return (
    <div className="App">
      <Analytics />
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {PERSONAL_INFO.COPYRIGHT_YEAR} {PERSONAL_INFO.NAME}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
