import React from 'react';
import './services.css';

const services = [
  {
    title: 'Front-End Development',
    icon: 'fas fa-laptop-code',
    description: 'Building responsive and interactive UIs using React.js, HTML, CSS, and modern JavaScript frameworks.'
  },
  {
    title: 'Back-End Development',
    icon: 'fas fa-server',
    description: 'Creating robust RESTful APIs and server-side logic using Node.js, Express, and Spring Boot.'
  },
  {
    title: 'Database Management',
    icon: 'fas fa-database',
    description: 'Designing and managing databases like PostgreSQL, SQL Server, and Oracle for efficient data handling.'
  },
  {
    title: 'DevOps & Deployment',
    icon: 'fas fa-cloud-upload-alt',
    description: 'Deploying scalable applications using Docker, GitHub Actions, Jenkins, and cloud platforms like AWS & Azure.'
  }
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={service.icon + ' service-icon'}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
