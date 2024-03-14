import React, { useEffect, useState } from "react";
import "./styles/TaskContainer.scss";
import { getChildTaskFromTaskId } from "../../api/api";
import ChildTask from "./ChildTask";

export default function TaskContainer(taskClass) {
  const taskObj = taskClass.obj;
  const [childTasks, setChildTasks] = useState([]);

  const getChildren = async () => {
    try {
      const response = await getChildTaskFromTaskId(taskObj.id);
      setChildTasks(response.data);
    } catch (error) {}
  };

  const displayChildTasks = () => {
    return childTasks.map((childTask) => <ChildTask props={childTask} />);
  };

  useEffect(() => {
    getChildren();
  }, []);

  return (
    <div className="taskContainer">
      <h2>{taskObj.content}</h2>
      {displayChildTasks()}
      <p>1/4</p>
    </div>
  );
}
