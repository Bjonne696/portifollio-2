import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="block sm:w-96 md:w-72 lg:w-96 xl:w-96 2xl:w-1/4 border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105" style={{ backgroundColor: '#fff750' }}>
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-md">{project.intro}</p>
        <p className="text-gray-600 text-md mt-2">{project.info}</p>
        <div className="mt-4">
          <a href={project.repoUrl} className="text-blue-500 hover:underline">GitHub Repo</a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="ml-4 text-blue-500 hover:underline">Live Site</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;