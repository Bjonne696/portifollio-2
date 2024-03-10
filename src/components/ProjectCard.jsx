import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="block w-full sm:w-72 md:w-48 lg:w-64 xl:w-72 border rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105">
      <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <div className="mt-3">
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