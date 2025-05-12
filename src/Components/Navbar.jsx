import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleScroll('top')}>
          Sai Vikas Goli
        </div>
        <ul className="nav-links">
          <li onClick={() => handleScroll('experience')}>Experience</li>
          <li onClick={() => handleScroll('skills')}>Skills</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li>
            <a 
              href="/resume.pdf" 
              download 
              className="resume-btn"
            >
              ⬇️ Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
