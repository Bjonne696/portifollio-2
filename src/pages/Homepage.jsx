import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-blue-500">
      {/* Left Side: Profile Image and Info with Diagonal Background */}
      <div className="relative w-1/4 flex-shrink-0">
        <div className="absolute top-0 left-0 w-full h-full transform custom-skew origin-bottom-right bg-blue-500"></div>
        <div className="relative z-10 p-6 text-white">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Bjørn-Tore</h2>
            <p>Email: example@example.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>
      </div>

      {/* Right Side: Project Cards */}
      <div className="flex-grow bg-green-500 flex flex-col items-start space-y-4 p-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
