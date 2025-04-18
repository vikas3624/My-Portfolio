import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-section">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Software Engineer – Capgemini</h3>
        <p className="job-dates">June 2021 – July 2023 | Chennai, India</p>
        <ul>
          <li>Designed, developed, tested, and deployed scalable technical solutions for Nordea Bank, ensuring security and efficiency.</li>
          <li>Built high-quality user interfaces with React.js, JavaScript, HTML, and CSS, improving customer experience.</li>
          
          <li>Conducted architecture reviews, wrote technical proposals, and developed prototypes to enhance system scalability.</li>
          <li>Collaborated in an Agile team, participating in stand-ups, sprint planning, and retrospectives to ensure timely delivery.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
