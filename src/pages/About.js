import React from 'react';
import './About.css';
import aboutImg from '../assets/vic.jpg';
import educationImg from '../assets/education.jpeg';
import skillsImg from '../assets/skills.jpeg';
import experienceImg from '../assets/experience.jpeg';
import passionImg from '../assets/passion.jpeg';
import goalsImg from '../assets/goals.jpeg';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="about-page">

      {/* Section 1: About Me */}
      <section className="about-section">
        <div className="image-container">
        <img src={aboutImg} alt="About me" className="profile-image" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            I’m <strong>Victor</strong>, a dedicated Full Stack Developer passionate about creating digital experiences that are
            intuitive, engaging, and efficient. I enjoy exploring new technologies and applying them to solve
            real-world challenges. I am highly specialized in <strong>Software Development, Android Development (mobile app), Website Design & Development, 
            Graphics Design, UI/UX Design, Artificial Intelligence & Machine Learning, Data Science, Search Engine Optimization (SEO), 
            Database Management, Microsoft Office, Networking </strong>, and <strong>IT Support</strong>.
          </p>
        </div>
      </section>

      {/* Section 2: Education */}
      <section className="about-section">
        <div className="image-container">
          <img src={educationImg} alt="Education" />
        </div>
        <div className="text-container">
          <h2>Education</h2>
          <p className="about-description">
            I have a degree in <strong>Bachelor of Science in Computer Science</strong> at <strong>Karatina University</strong>. 
            During my academic journey, I have gained extensive knowledge and hands-on experience in <strong>Software Development, Android Development (mobile app), Game Development, Website Design & Development, Graphics Design, UI/UX Design, Artificial Intelligence & Machine Learning, Data Science, Search Engine Optimization (SEO), Database Management, Microsoft Office, Networking</strong>, and <strong>IT Support</strong>. 
            My studies also equipped me with strong foundations in programming, software engineering, data structures, and systems analysis.
          </p>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section className="about-section">
        <div className="image-container">
          <img src={skillsImg} alt="Skills" />
        </div>
        <div className="text-container">
          <h2>Technical & Professional Skills</h2>
          <div className="skills-content">
            <ul className="skills-list">
              <li><strong>Programming languages & Development:</strong> Python, Java, C++, Dart, PHP, C#, OOP, SDLC, Git, REST APIs</li>
              <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, Node.js, Python, Java, WordPress</li>
              <li><strong>Frameworks:</strong> Flask, Django, Spring Boot, React.js, Node.js</li>
              <li><strong>Development Tools:</strong> VS Code, Android Studio, Dev-C++, Unity</li>
              <li><strong>Design & UI/UX:</strong> InDesign, Figma, Photoshop, Illustrator, Canva, Wireframing, Prototyping</li>
              <li><strong>AI & Machine Learning:</strong> Scikit-learn, TensorFlow, Keras, Pandas</li>
              <li><strong>Data Science & Analytics:</strong> Data Analysis, EDA, Matplotlib, Seaborn, Power BI</li>
              <li><strong>Database Management:</strong> SQLite, PostgreSQL, MySQL, MongoDB, ER Modeling</li>
              <li><strong>SEO & Analytics:</strong> On-Page SEO, Google Analytics, Keyword Research, SEO Tools</li>
              <li><strong>Microsoft Office Tools:</strong> Excel, Word, Access, PowerPoint, Google Workspace</li>
              <li><strong>IT Support:</strong> Fiber management, System Troubleshooting, Networking, Software/Hardware Setup, User Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Experience */}
      <section className="about-section">
        <div className="image-container">
          <img src={experienceImg} alt="Experience" />
        </div>
        <div className="text-container">
          <h2>Professional Experience</h2>
          <p>
            I have worked on various academic projects involving web design, system development, data science analysis, AI & ML models, Android development, database integration,
            and API development. My experience includes building full-stack applications, working collaboratively
            with teams, and managing tasks with Git.
          </p>
        </div>
      </section>

      {/* Section 5: Passion */}
      <section className="about-section">
        <div className="image-container">
          <img src={passionImg} alt="Passion" />
        </div>
        <div className="text-container">
          <h2>Passion & Interests</h2>
          <p>
            I have a strong passion for emerging technologies, especially AI, machine learning, data science, Android development, software development,networking and web development.
            I also enjoy participating in hackathons, building open-source projects, and exploring UI/UX design.
          </p>
        </div>
      </section>

      {/* Section 6: Goals */}
      <section className="about-section">
        <div className="image-container">
          <img src={goalsImg} alt="Goals and Vision" />
        </div>
        <div className="text-container">
          <h2>Goals & Vision</h2>
          <p>
            My vision is to become a transformative software engineer and data science engineer who contributes to meaningful technological
            innovations. I aim to pursue further studies and work on impactful projects that improve lives and stimulate well-being of others through technology.
          </p>
        </div>
      </section>
<Footer />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Victor Mwenda Mururu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;

