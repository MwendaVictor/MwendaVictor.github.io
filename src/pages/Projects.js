import React from 'react';
import './Projects.css'; // Make sure this CSS file is imported
import Footer from '../Footer';
function Projects() {
  const completedProjects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive web portfolio showcasing my skills and projects.',
      link: 'https://github.com/MwendaVictor/MwendaVictor.github.io.git',
    },
    {
      title: 'AI-powered Mpox Outbreak Prediction Model',
      description: 'Utilizes machine learning to predict and track Mpox outbreak patterns using historical health data.',
      link: 'https://github.com/MwendaVictor/AI-MPOX-OPS.git',
    },
    {
      title: 'Supermarket Supply Chain Inventory Management Simulation',
      description: 'Simulates supply chain operations to optimize stock levels and reduce waste in a retail setting.',
    },
    {
      title: 'Diabetes Prediction System Model',
      description: 'A machine learning model that predicts the likelihood of diabetes based on patient data.',
      link: 'https://github.com/nicomalombe/diabetes_prediction_model.git'
    },

    {
      title: 'Rule-based Expert System',
      description: 'Uses inference logic and defined rules to provide expert-level analysis in a given domain.',
      link: 'https://github.com/nicomalombe/expert-system.git',
    },
    {
      title: 'Business ERP Planning System',
      description: 'Integrated software solution for managing key business processes such as HR, finance, and supply chain.',
      link: 'https://github.com/nicomalombe/business_erp.git',
    },
    {
      title: 'ML Loan Default Prediction',
      description: 'Predictive model to assess the risk of loan default using classification algorithms on financial data.',
      link: 'https://github.com/MwendaVictor/AI-LDPS.git',
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Leverages AI to forecast demand, optimize inventory levels, and improve logistics efficiency.',
      link: 'https://github.com/KaheniSatima/kaheni-marketing-sales-system.git',
    },
  ];

  const ongoingProjects = [
    {
      title: 'E-commerce Optimization',
      description: 'Enhancing online retail performance through AI-driven customer behavior analysis and personalized recommendations.',
    },
    {
      title: 'Hotel Room Booking Management System',
      description: 'A web-based system for managing hotel room availability, reservations, and customer check-ins/check-outs.',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Successfully Completed Projects</h2>
      <div className="project-list">
        {completedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description}{' '}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1a73e8' }}
                >
                  View On GitHub
                </a>
              )}
            </p>
          </div>
        ))}
      </div>

      <h2 className="projects-title" style={{ marginTop: '3rem' }}>Ongoing Projects</h2>
      <div className="project-list">
        {ongoingProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;
