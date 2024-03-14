import React from "react";
import TaskContainer from "./TaskContainer";
import "./styles/List.scss";

export default function List(arrayOfTasks) {
  const displayTasks = () => {
    return arrayOfTasks.data.map((taskClass) => {
      return !taskClass.is_staged ? "" : <TaskContainer obj={taskClass} />;
    });
  };

  return (
    <div className="container staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">{displayTasks()}</div>
    </div>
  );
}
