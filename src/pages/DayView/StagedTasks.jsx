import React from "react";
import "./styles/StagedTasks.scss";
import TaskContainer from "./TaskBox";

export default function StagedTasks(arrayOfTasks) {
  return (
    <div className="container staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">
        {arrayOfTasks.data.map((task) => {
          return task.is_staged ? "" : <TaskContainer obj={task} />;
        })}
      </div>
    </div>
  );
}
