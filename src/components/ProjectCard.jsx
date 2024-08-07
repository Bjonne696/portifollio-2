const ProjectCard = ({ project }) => {
  return (
    <div className="block w-full border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:bg-yellow-300 flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
