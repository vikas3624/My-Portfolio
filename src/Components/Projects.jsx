import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "To-Do App",
    description: "A simple and responsive To-Do application built with React and localStorage. Users can add, edit, delete, and mark tasks as completed.",
    github: "https://github.com/vikas3624/todo-app"
  },
  {
    title: "Employee Schedule Generator",
    description: "A full-stack MERN app that allows employees to submit availability and automatically generates a weekly schedule using an admin panel.",
    github: "https://github.com/vikas3624/employee-schedule-generator"
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
