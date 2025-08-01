import React from 'react';
import './Skills.css';
import { FaCode, FaLaptopCode, FaPaintBrush, FaBrain, FaChartBar, FaDatabase, FaSearch, FaLaptop } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import Footer from '../Footer';
const skillsData = [
    {
        title: 'Programming & Development',
        icon: <FaCode />,
        skills: ['Python', 'TypeScript', 'OOP', 'SDLC', 'Agile', 'Git', 'REST APIs']
    },
    {
        title: 'Web Development',
        icon: <FaLaptopCode />,
        skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'WordPress', 'Responsive Design']
    },
    {
        title: 'UI & UX Design',
        icon: <FaPaintBrush />,
        skills: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva', 'Wireframing', 'Prototyping']
    },
    {
        title: 'AI & Machine Learning',
        icon: <FaBrain />,
        skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Model Evaluation', 'Pandas']
    },
    {
        title: 'Data Science & Analytics',
        icon: <FaChartBar />,
        skills: ['Data Cleaning', 'EDA', 'Matplotlib', 'Seaborn', 'Power BI']
    },
    {
        title: 'Database Management',
        icon: <FaDatabase />,
        skills: ['MySQL', 'MongoDB', 'ER Modeling', 'CRUD', 'Normalization']
    },
    {
        title: 'SEO & Analytics',
        icon: <FaSearch />,
        skills: ['Google Analytics', 'On-Page SEO', 'Keyword Research', 'SEO Tools']
    },
    {
        title: 'Microsoft Office Tools',
        icon: <MdSupportAgent />,
        skills: ['Excel', 'Word', 'PowerPoint', 'Projects', 'Google Workspace']
    },
    {
        title: 'IT Support',
        icon: <FaLaptop />, 
        skills: ['Troubleshooting', 'Networking', 'Software/Hardware Setup', 'User Support']
    }
];

const Skills = () => {
    return (
        <>
            <div className="skills-section">
                <h2 className="skills-title">Technical & Professional Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <ul>
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
    <Footer />
        </>
    );
};

export default Skills;
