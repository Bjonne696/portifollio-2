// /src/components/portifolio

import React from 'react';
import ProjectCard from './ProjectCard'

// Sample data for the projects. Replace with your actual project details.
const projects = [
  {
    id: 1,
    title: 'Semester Project 2',
    intro: 'short line 1',
    description: 'This project involves creating an advanced web application using modern development tools and frameworks.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/semester-project-2',
    liveUrl: 'https://semester-project-2.live' // Replace with live URL if available
  },
  {
    id: 2,
    title: 'JavaScript Frameworks CA',
    intro: 'short line 2',
    description: 'A comprehensive project showcasing the use of various JavaScript frameworks to solve complex problems.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/javascript-frameworks-ca',
    liveUrl: 'https://javascript-frameworks-ca.live' // Replace with live URL if available
  },
  {
    id: 3,
    title: 'Project Exam 2',
    intro: 'short line 3',
    description: 'The culmination of learnings in a practical exam project, implementing best practices and innovative solutions.',
    imageUrl: 'https://i.ibb.co/xj5My3j/placeholder.webp/150', // Replace with your project screenshot URL
    repoUrl: 'https://github.com/yourusername/project-exam-2',
    liveUrl: 'https://project-exam-2.live' // Replace with live URL if available
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 p-10">
      <h1 className="text-white text-4xl font-bold mb-8">Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;