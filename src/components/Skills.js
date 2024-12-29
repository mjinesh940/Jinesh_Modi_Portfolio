import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Java', img: ('../images/JAVA.png') }, 
  { name: 'React', img: require('../images/React.png').default }, 
  { name: 'Spring Boot', img: require('../images/Spring.png').default }, 
  { name: 'Data Analytics', img: require('../images/DataAnalytics.png').default }, 
  { name: 'SQL', img: require('../images/SQL.png').default }, 
  { name: 'Hibernate', img: require('../images/Hibernate.png').default }, 
  { name: 'Web-tech', img: require('../images/WebTech.png').default }, 
  { name: 'PHP', img: require('../images/PHP.png').default }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.img} alt={skill.name} />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;