import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group block w-full overflow-hidden shadow-lg transform transition duration-500 hover:bg-yellow-300 flex flex-col justify-between hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold reverse-custom-skew mb-2">
          {project.title}
        </h3>
        <div className="hidden group-hover:block transition duration-500">
          <p className="text-sm reverse-custom-skew mb-4">{project.info}</p>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 reverse-custom-skew object-cover mb-4"
          />
          <div className="mt-4 reverse-custom-skew">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition duration-300 underline mr-4"
            >
              View Repository
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition duration-300 underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
