import React from "react";

import "./App.css";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [task, setTask] = React.useState("");
  const [taskEditing, setTaskEditing] = React.useState<number | null>(null);
  const [editingText, setEditingText] = React.useState("tasks");

  React.useEffect(() => {
    const temp = localStorage.getItem("tasks") ?? "[]";
    const loadedTasks = JSON.parse(temp) as Task[];
    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  React.useEffect(() => {
    const temp = JSON.stringify(tasks);
    localStorage.setItem("tasks", temp);
  }, [tasks]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask: Task = {
      id: new Date().getTime(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleComplete(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.text = editingText;
      }
      return task;
    });
    setTasks(updatedTasks);
    setTaskEditing(null);
    setEditingText("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        {/* <button type="submit">Add Task</button> */}
        <button type="button" className="btn btn-primary">
          Add Task
        </button>
      </form>

      {tasks.map((task) => (
        <div key={task.id}>
          {taskEditing === task.id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : (
            <div>{task.text}</div>
          )}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete Task
          </button>
          {/* <button onClick={() => deleteTask(task.id)}>Delete Task</button> */}
          <input
            type="checkbox"
            onChange={() => toggleComplete(task.id)}
            checked={task.completed}
          />

          {taskEditing === task.id ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => editTask(task.id)}
            >
              Submit Edits
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => setTaskEditing(task.id)}
            >
              Edit Task
            </button>
            // <button onClick={() => setTaskEditing(task.id)}>Edit Task</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;

// import React from "react";

// import "./App.css";

// function App() {
//   const [tasks, setTasks] = React.useState([]);
//   const [task, setTask] = React.useState("");
//   const [taskEditing, setTaskEditing] = React.useState(null);
//   const [editingText, setEditingText] = React.useState("tasks");

//   React.useEffect(() => {
//     const temp = localStorage.getItem("tasks") ?? "[]";
//     const loadedTasks = JSON.parse(temp);
//     if (loadedTasks) {
//       setTasks(loadedTasks);
//     }
//   }, []);
//   React.useEffect(() => {
//     const temp = JSON.stringify(tasks);
//     localStorage.setItem("tasks", temp);
//   }, [tasks]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newTask = {
//       id: new Date().getTime(),
//       text: task,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTask("");
//   }

//   function deleteTask(id) {
//     const updatedTasks = [...tasks].filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//   }

//   function toggleComplete(id) {
//     const updatedTasks = [...tasks].map((task) => {
//       if (task.id === id) {
//         task.completed = !task.completed;
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   }

//   function editTask(id) {
//     const updatedTasks = [...tasks].map((task) => {
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
//         <button type="submit">Add Task</button>
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

//           <button onClick={() => deleteTask(task.id)}>Delete Task</button>
//           <input
//             type="checkbox"
//             onChange={() => toggleComplete(task.id)}
//             checked={task.completed}
//           />

//           {taskEditing === task.id ? (
//             <button onClick={() => editTask(task.id)}>Submit Edits</button>
//           ) : (
//             <button onClick={() => setTaskEditing(task.id)}>Edit Task</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
