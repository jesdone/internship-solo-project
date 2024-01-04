import React, { useState } from "react";
import "./index.css";
import { MdSunny, MdDarkMode } from "react-icons/md";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [task, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <div
        className={
          '${darkTheme ? "bg-gray-900" : "bg-gray-100"} hero h-screen w-full m-auto flex flex-col items-center mt-14 transition-all duration-500'
        }
      >
        <div
          className={
            '${darkTheme ? "text-white": "text-black"} flex flex-col space-y-6 w-[600px] z-10 p-4'
          }
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="uppercase text-4xl font-bold text-white tracking-widest mb-4">
              My Tasks
            </h1>
            {darkTheme ? (
              <MdSunny
                onClick={toggleTheme}
                size={32}
                className={
                  '${ darkTheme ?"text-white" : "text-black"}bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg bottom-5 right-5'
                }
              />
            ) : (
              <MdDarkMode
                onClick={toggleTheme}
                size={32}
                className={
                  '${ darkTheme ?"text-white" : "text-black"} bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg bottom-5 right-5'
                }
              />
            )}
          </div>

          <div className="shadow-md">
            <AddTaskForm onAddTask={addTask} darkTheme={darkTheme} />
          </div>
          <div
            className={
              'scroll w-full h[400px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500 ${darkTheme ? "bg-gray-800" : "bg-white"}'
            }
          >
            <div className="w-full flex items-center justify-between text-gray-500 border-b overflow-hidden sticky top-0">
              <p className="px-2 py-3">Tasks Left</p>
              <button onClick={clearTasks}>Clear All Task</button>
            </div>

            {task.length ? (
              <TaskList
                tasks={tasks}
                onEditTask={editTask}
                onDeleteTask={deleteTask}
                onToggleCompleted={toggleCompleted}
              />
            ) : (
              <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
                <p className="text-gray-500 text-center z-10">Empty Task</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

// import  from Frame "./components/TaskList.tsx"
// // import ".../Heading";
// // import ".../TaskList";

// type Task = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// function App() {
//   const [tasks, setTasks] = React.useState<Task[]>([]);
//   const [task, setTask] = React.useState("");
//   const [taskEditing, setTaskEditing] = React.useState<number | null>(null);
//   const [editingText, setEditingText] = React.useState("tasks");

//   React.useEffect(() => {
//     const temp = localStorage.getItem("tasks") ?? "[]";
//     const loadedTasks = JSON.parse(temp) as Task[];
//     if (loadedTasks) {
//       setTasks(loadedTasks);
//     }
//   }, []);

//   React.useEffect(() => {
//     const temp = JSON.stringify(tasks);
//     localStorage.setItem("tasks", temp);
//   }, [tasks]);

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const newTask: Task = {
//       id: new Date().getTime(),
//       text: task,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTask("");
//   }

//   function deleteTask(id: number) {
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//   }

//   function toggleComplete(id: number) {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === id) {
//         task.completed = !task.completed;
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   }

//   function editTask(id: number) {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === id) {
//         task.text = editingText;
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//     setTaskEditing(null);
//     setEditingText("");
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setTask(e.target.value)}
//           value={task}
//         />
//         {/* <button type="submit">Add Task</button> */}
//         <button type="button" className="btn btn-primary">
//           Add Task
//         </button>
//       </form>

//       {tasks.map((task) => (
//         <div key={task.id}>
//           {taskEditing === task.id ? (
//             <input
//               type="text"
//               onChange={(e) => setEditingText(e.target.value)}
//               value={editingText}
//             />
//           ) : (
//             <div>{task.text}</div>
//           )}
//           <button
//             type="button"
//             className="btn btn-danger"
//             onClick={() => deleteTask(task.id)}
//           >
//             Delete Task
//           </button>
//           {/* <button onClick={() => deleteTask(task.id)}>Delete Task</button> */}
//           <input
//             type="checkbox"
//             onChange={() => toggleComplete(task.id)}
//             checked={task.completed}
//           />

//           {taskEditing === task.id ? (
//             <button
//               type="button"
//               className="btn btn-warning"
//               onClick={() => editTask(task.id)}
//             >
//               Submit Edits
//             </button>
//           ) : (
//             <button
//               type="button"
//               className="btn btn-warning"
//               onClick={() => setTaskEditing(task.id)}
//             >
//               Edit Task
//             </button>
//             // <button onClick={() => setTaskEditing(task.id)}>Edit Task</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
