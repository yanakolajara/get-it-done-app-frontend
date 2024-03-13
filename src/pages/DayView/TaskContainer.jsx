import React from "react";
import "./styles/TaskContainer.scss";

export default function TaskContainer(taskClass) {
  const taskObj = taskClass.obj;
  return <div className="taskContainer">{taskObj.content}</div>;
}
