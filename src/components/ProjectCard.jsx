// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-48 h-72 border rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover" />
      <div className="p-4 h-40">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm overflow-ellipsis overflow-hidden h-14">{project.description}</p>
        <div className="flex flex-col mt-2">
          <a href={project.repoUrl} className="text-blue-500 hover:underline text-sm">GitHub Repo</a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-blue-500 hover:underline text-sm mt-1">Live Site</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;