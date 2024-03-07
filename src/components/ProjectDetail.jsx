import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  return (
    // Responsive and centered container
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} className="w-full h-auto mb-4" />
      <p className="text-xl mb-4">{project.description}</p>
      {/* Optionally display the intro if you decide to show it */}
      <p className="text-md mb-4 italic">"{project.intro}"</p>
      <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
        <a href={project.repoUrl} className="text-blue-500 hover:underline">GitHub Repo</a>
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-blue-500 hover:underline">Live Site</a>
        )}
      </div>
      {/* Navigation back to the portfolio */}
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Portfolio</Link>
    </div>
  );
};

export default ProjectDetail;
