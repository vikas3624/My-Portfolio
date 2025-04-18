import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
import 'font-awesome/css/font-awesome.min.css';
import Services from './Components/services.jsx';

function App() {
  return (
    <div className="container">
      <Navbar />

      <header id="top">
        <h1>Sai Vikas Goli</h1>
        <p>Full Stack Developer</p>
      </header>

      <main>
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <WorkExperience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="projects">
          <Services />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
