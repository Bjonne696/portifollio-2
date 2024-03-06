// /src/components/portifolio

import React from 'react';

// Sample data for the projects. Replace with your actual project details.
const projects = [
  {
    id: 1,
    title: 'Semester Project 2',
    description: 'This project involves creating an advanced web application using modern development tools and frameworks.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/semester-project-2',
    liveUrl: 'https://semester-project-2.live' // Replace with live URL if available
  },
  {
    id: 2,
    title: 'JavaScript Frameworks CA',
    description: 'A comprehensive project showcasing the use of various JavaScript frameworks to solve complex problems.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/javascript-frameworks-ca',
    liveUrl: 'https://javascript-frameworks-ca.live' // Replace with live URL if available
  },
  {
    id: 3,
    title: 'Project Exam 2',
    description: 'The culmination of learnings in a practical exam project, implementing best practices and innovative solutions.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/project-exam-2',
    liveUrl: 'https://project-exam-2.live' // Replace with live URL if available
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 p-10">
      {/* Portfolio Title */}
      <h1 className="text-white text-4xl font-bold mb-8">Portfolio</h1>
      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <div key={project.id} className="w-48 h-72 border rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Adjust image size to fit the card. Might need further adjustments based on actual image aspect ratios */}
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;