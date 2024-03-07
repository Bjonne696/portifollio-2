// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block w-full sm:w-72 md:w-48 lg:w-64 xl:w-72 border rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105">
      <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm">{project.intro}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;