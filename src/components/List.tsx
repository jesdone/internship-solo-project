import React, { Fragment } from "react";
import "./style.css";

export const Frame = (): JSX.Element => {
  return (
    <Fragment>
      <div className="frame">
        <div className="text-wrapper">Add New Task</div>
      </div>

      <div className="frame">
        <div className="text-wrapper">Edit Tasks</div>
      </div>

      <div className="frame">
        <div className="text-wrapper">Delete Tasks</div>
      </div>

      <div className="frame">
        <div className="text-wrapper">View Tasks</div>
      </div>

      <div className="frame">
        <div className="text-wrapper">Date</div>
      </div>

      <div className="frame">
        <p className="due-date-task-name">
          Due Date: Task Name <br />
          Task Description
        </p>
      </div>

      <div className="frame">
        <p className="due-date-task-name">
          Due Date: Task Name
          <br />
          Task Description
        </p>
      </div>

      <div className="frame">
        <p className="due-date-task-name">
          Due Date: Task Name
          <br />
          Task Description
        </p>
      </div>
    </Fragment>
  );
};
