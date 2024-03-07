// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} className="mb-4" />
      <p className="mb-4">{project.description}</p>
      <a href={project.repoUrl} className="text-blue-500 hover:underline">GitHub Repo</a>
      {project.liveUrl && (
        <>
          <span> | </span>
          <a href={project.liveUrl} className="text-blue-500 hover:underline">Live Site</a>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
