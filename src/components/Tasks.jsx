import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl text-gray-700 font-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-gray-800 my-4">
          This project does not have any Task
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 bg-gray-100 rounded-md">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-grat-500 text-red-500 text-xs  hover:bg-red-500 hover:text-white  bg-white border rounded px-4 py-1 border-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
