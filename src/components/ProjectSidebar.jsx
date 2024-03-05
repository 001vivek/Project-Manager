import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  console.log("new projects::", projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      <div className="">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full mb-4 bg-gray-200 hover:bg-gray-500 rounded px-2 hover:text-white text-gray-900  text-left py-2">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
