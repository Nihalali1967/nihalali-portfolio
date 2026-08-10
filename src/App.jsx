import React from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import SEOHead from "./components/SEOHead";

export default function App() {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
}
