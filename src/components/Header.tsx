import React from "react";
import "./style.css";

export const Frame = (): JSX.Element => {
  return (
    <div className="frame">
      <div className="task-manager-wrapper">
        <img className="task-manager" alt="Task manager" src="task-manager.png" />
      </div>
    </div>
  );
};

// export const Frame = (): JSX.Element => {
//   return (
    <div className="frame">
      <img className="task-manager" alt="Task manager" src="task-manager.png" />
    </div>
//   );
// };
