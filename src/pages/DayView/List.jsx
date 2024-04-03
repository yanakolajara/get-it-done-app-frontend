import React, { useEffect } from "react";
import ListTask from "./ListTask";

export default function List({ children }) {
  return (
    <div className="container-glass staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">{children}</div>
    </div>
  );
}
