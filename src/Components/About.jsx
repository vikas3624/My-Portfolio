import React from 'react';
import './About.css';
import profilePic from '../assets/Profilepic.jpeg'; // Make sure you place the image in /src/assets

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi! I'm <strong>Sai Vikas Goli</strong>, a passionate Full Stack Developer with over 2 years 
            of experience in software development. I specialize in building dynamic, user-friendly web applications
             and offer end-to-end development services from designing intuitive front-end interfaces to developing
              robust back-end systems and managing databases. I enjoy solving complex problems, 
              optimizing performance, and working on projects that make a real impact. 
              I’m always up for a challenge and 
              love collaborating with others to bring ideas to life.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Sai Vikas Goli" />
        </div>
      </div>
    </section>
  );
};

export default About;
