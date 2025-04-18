import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact</h3>
        <ul>
          <li>
            <i className="fas fa-envelope"></i> Email: <a href="mailto:saivicky9@gmail.com">saivicky9@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i> Phone: <a href="tel:+14373666979">+1 (437) 366-6979</a>
          </li>
          <li>
            <i className="fab fa-github"></i> GitHub: <a href="https://github.com/vikas3624" target="_blank" rel="noopener noreferrer">github.com/vikas3624</a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/sai-vikas-goli-512a74b2/" target="_blank" rel="noopener noreferrer">linkedin.com/in/saivikasgoli</a>
          </li>
        </ul>
        <p className="footer-note">© {new Date().getFullYear()} Sai Vikas Goli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
