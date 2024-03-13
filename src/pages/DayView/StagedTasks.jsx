import React from "react";
import "./styles/StagedTasks.scss";

export default function StagedTasks(data) {
  return (
    <div className="container staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container"></div>
    </div>
  );
}
