import React from 'react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import ProjectsCarousel from '../components/ProjectsCarousel';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <ProjectsCarousel />
    </>
  );
};

export default Home;