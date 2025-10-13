import React from 'react';
import { Timeline } from './ui/timeline'; 
import { timelineData } from '../data/portfolioData.jsx'; 

const ExperienceSection = () => {
  return (
    <section id="experience">
      <Timeline data={timelineData} />
    </section>
  );
};

export default ExperienceSection;