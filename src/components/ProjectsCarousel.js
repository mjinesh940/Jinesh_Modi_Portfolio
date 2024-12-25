import React, { useEffect, useState } from 'react';
import './ProjectsCarousel.css';

const projects = [
  { name: 'Scholarship Portal', tech: 'React, PHP', link: 'https://github.com/mjinesh940/Scholarship-Portal' },
  { name: 'Feed Forward Portal', tech: 'React, Firebase', link: 'https://github.com/mjinesh940/Feed_Forward' },
  { name: 'Sentiment Analysis', tech: 'Python, ML', link: 'https://github.com/mjinesh940/Text_Analysis' }
];

const ProjectsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="projects-carousel">
      <h2>Projects</h2>
      <div className={`carousel ${isVisible ? 'fade-in' : ''}`}>
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noreferrer" 
            className="project-card"
          >
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <div className="project-link">View on GitHub</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;