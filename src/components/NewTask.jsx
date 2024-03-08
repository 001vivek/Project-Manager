import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  const handleAddTask = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <div className=" w-96">
          <h1>Task cannot be empty !</h1>
        </div>
      </Modal>
      <div className="flex items-center gap-4 ">
        <div className="relative">
          <input
            value={enteredTask}
            onChange={(e) => setEnteredTask(e.target.value)}
            type="text "
            className="w-64 focus:ring-0 focus:border-none  px-2 py-1 rounded-sm bg-gray-200"
          />
        </div>
        <button
          onClick={handleAddTask}
          className="text-gray-700 px-4 py-1  hover:text-white bg-gray-300 hover:bg-green-400  rounded-sm hover:scale-110"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
