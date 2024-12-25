import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = ['Java', 'React', 'Spring Boot', 'Data Analytics', 'SQL', 'Hibernate', 'Web-tech', 'PHP'];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className={`skills-container ${isVisible ? 'fade-in' : ''}`}>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;