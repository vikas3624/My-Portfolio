import React from 'react';
import './Skills.css';

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "C#", "Java", "C++"]
  },
  {
    category: "Front-End Technologies",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Back-End Technologies",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQL Server", "Oracle"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "AWS", "Docker"]
  },
  {
    category: "CI/CD & Version Control",
    items: ["Git", "GitHub", "GitHub Actions", "Jenkins"]
  },
  {
    category: "Software Development Methodologies",
    items: ["Agile", "Scrum"]
  },
  {
    category: "Testing & Quality Assurance",
    items: ["Jest", "Cypress", "XUnit", "tSQLt"]
  }
];

const Skills = () => {
  return (
    <div className="skills-table-section">
      <h2>Skills</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.category}</td>
              <td>{skill.items.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
