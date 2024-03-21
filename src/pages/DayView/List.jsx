import React, { useEffect } from "react";
import ListTask from "./ListTask";
import "./styles/List.scss";

export default function List({ props }) {
  const { arrayOfTasks, fetchData } = props;
  const displayTasks = () => {
    return arrayOfTasks.map((taskObj) => {
      return <ListTask props={{ taskObj, fetchData }} />;
    });
  };
  useEffect(() => {
    console.log("rerender List");
  }, [fetchData]);

  return (
    <div className="container staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">{displayTasks()}</div>
    </div>
  );
}
