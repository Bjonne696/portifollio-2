// /src/components/portifolio

import React from 'react';
import ProjectCard from './ProjectCard'
import projects from '../data/projectsData'



const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 p-10">
      <h1 className="text-white text-4xl font-bold mb-8">Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;