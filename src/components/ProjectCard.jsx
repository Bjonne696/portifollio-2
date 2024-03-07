// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="w-48 h-72 border rounded-lg overflow-hidden shadow-lg bg-white block">
      <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm">{project.intro}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;