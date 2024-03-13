import React from "react";
import TaskContainer from "./TaskContainer";
import "./styles/StagedTasks.scss";

export default function StagedTasks(arrayOfTasks) {
  return (
    <div className="container staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">
        {arrayOfTasks.data.map((taskClass) => {
          return !taskClass.is_staged ? "" : <TaskContainer obj={taskClass} />;
        })}
      </div>
    </div>
  );
}
