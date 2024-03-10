import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

const Portfolio = () => {
  return (
    <div className="min-h-screen p-10">
      <p className="text-white text-4xl font-bold mb-8">Click the links to be navigated to the repositories, or check out the live site!</p>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
