import React from 'react';
import './Services.css';
import Footer from '../Footer';

import webImg from '../assets/web.jpeg';
import mobileImg from '../assets/mobile.jpg';
import aiImg from '../assets/ai.jpeg';
import consultingImg from '../assets/IT.jpeg';
import networkImg from '../assets/network.jpeg';
import analysisImg from '../assets/data.jpeg';
import supportImg from '../assets/IT.jpeg';
import uiuxImg from '../assets/uiux.png';
import dataImg from '../assets/datas.jpeg';
import devopsImg from '../assets/dev.jpeg';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={webImg} alt="Web Development" className="service-image" />
          <h3>Web Development</h3>
          <p>I build responsive and dynamic websites using modern technologies like React, HTML, CSS, and TypeScript.</p>
        </div>

        <div className="service-card">
          <img src={mobileImg} alt="Mobile App Development" className="service-image" />
          <h3>Mobile App Development</h3>
          <p>Native and hybrid mobile applications using Android Studio (Java/Kotlin) with smooth UI/UX experiences.</p>
        </div>

        <div className="service-card">
          <img src={aiImg} alt="AI & Data Solutions" className="service-image" />
          <h3>AI & Data Solutions</h3>
          <p>Custom AI models, machine learning solutions, and data-driven applications using Python, Pandas, and scikit-learn.</p>
        </div>

        <div className="service-card">
          <img src={consultingImg} alt="IT Consulting" className="service-image" />
          <h3>IT Consulting</h3>
          <p>Professional advice, planning, and digital transformation strategies to scale your digital presence effectively.</p>
        </div>

        <div className="service-card">
          <img src={networkImg} alt="Network Engineering" className="service-image" />
          <h3>Network Engineering</h3>
          <p>Design, configure, and maintain secure and scalable computer networks for both small businesses and enterprise environments.</p>
        </div>

        <div className="service-card">
          <img src={analysisImg} alt="Data Analysis" className="service-image" />
          <h3>Data Analysis</h3>
          <p>Perform data cleaning, visualization, and insights generation to support decision-making using Excel, SQL, Python, and Power BI.</p>
        </div>

        <div className="service-card">
          <img src={supportImg} alt="IT Support Specialist" className="service-image" />
          <h3>IT Support Specialist</h3>
          <p>Troubleshooting, maintenance, and help desk support to ensure smooth IT operations and end-user satisfaction.</p>
        </div>

        <div className="service-card">
          <img src={uiuxImg} alt="UI/UX Design" className="service-image" />
          <h3>UI/UX Design</h3>
          <p>Craft intuitive and user-centered interfaces using tools like Figma and Adobe XD to enhance user experience.</p>
        </div>

        <div className="service-card">
          <img src={dataImg} alt="Data Science" className="service-image" />
          <h3>Data Science</h3>
          <p>Predictive modeling, data mining, and statistical analysis using Python, R, TensorFlow, and scikit-learn.</p>
        </div>

        <div className="service-card">
          <img src={devopsImg} alt="DevOps Engineering" className="service-image" />
          <h3>DevOps Engineering</h3>
          <p>Automate deployments, manage CI/CD pipelines, and monitor infrastructure using Docker, Jenkins, GitHub Actions, and Kubernetes.</p>
        </div>
      </div>
      <Footer />
    </section>
   
  );
};

export default Services;
