import React, { useState } from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";

const Task = ({ task, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleCancel = () => {
    setEditing(false);
    setTitle(task.title);
  };
  const handleCompleted = () => {
    onToggleCompleted(task.id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };
  const handleDelete = () => {
    onDeleteTask(task.id);
  };
  const handleDone = () => {
    if (title.trim()) {
      onEditTask(task.id, title.trim());
      setEditing(false);
    }
  };
  return (
    <li className="mb-1 border-b border-gray-300 space-y-2">
      {editing ? (
        <form
          onSubmit={handleDone}
          className="flex items-center justify-between p-1 px-3 w-full"
        >
          <div className="flex items-center space x-3 w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent py-3 text-lg"
            />
          </div>
          <div className="flex space-x-3">
            <button type="submit">
              <MdDone
                size={20}
                className="text-gray-500 hover:text-yellow-500"
              />
            </button>
            <button onClick={handleCancel}>
              <RxCross2
                size={20}
                className="text-gray-500 hover:text-green-500"
              />
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between p-4 px-3">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCompleted}
              className="rounded-none"
            />
            <span
              className={
                '${task.completed ? "line-through text-gray-500 text-lg" : "text-lg "}'
              }
            >
              {task.title}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={handleEdit}>
              <CiEdit size={20} className="text-gray-500 hover:text-red-500" />
            </button>
            <button onClick={handleDelete}>
              <MdDelete
                size={20}
                className="text-gray-500 hover:text-blue-500"
              />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;

// import React, { Fragment } from "react";
// import "./style.css";
// import App from "../App";

// export const Frame = (): JSX.Element => {
//   return (
//     <Fragment>
//       <div className="frame">
//         <div className="task-manager-wrapper">
//           <img
//             className="task-manager"
//             alt="Task manager"
//             src="task-manager.png"
//           />
//         </div>
//       </div>

//       <div className="frame">
//         <img
//           className="task-manager"
//           alt="Task manager"
//           src="task-manager.png"
//         />
//       </div>
//     </Fragment>
//   );
// };
// // export default TaskList;
