import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  const handleAddTask = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
        type="text "
        className="w-64 focus:ring-0 focus:border-none  px-2 py-1 rounded-sm bg-gray-200"
      />
      <button
        onClick={handleAddTask}
        className="text-gray-700 px-4 py-1 hover:text-white bg-gray-300 hover:bg-green-400  rounded-sm hover:scale-110"
      >
        Add Task
      </button>
    </div>
  );
}
