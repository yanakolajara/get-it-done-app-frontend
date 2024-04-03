import React, { useEffect, useState } from "react";
import { createChildTask, getChildTaskFromTaskId } from "../../api/api";
import ChildTask from "./ChildTask";
import "./styles/ListTask.scss";

export default function ListTask(props) {
  const [childTasks, setChildTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getChildren = async () => {
    try {
      const response = await getChildTaskFromTaskId(props.id);
      setChildTasks(response);
      setIsLoading(false);
    } catch (error) {}
  };

  const displayChildTasks = () => {
    if (childTasks.length > 0) {
      return childTasks.map((childTask) => <ChildTask props={childTask} />);
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    getChildren();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="taskContainer">
      <h2>{props.content}</h2>
      {displayChildTasks()}
      <form
        className="create-child-task-form"
        onSubmit={async (e) => {
          e.preventDefault();
          await createChildTask(props.id, {
            content: newTaskContent,
          });
          getChildren();
        }}
      >
        <input
          type="text"
          className="create-child-task-form__contsent"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
        {/* <input type="" /> */}
        {/* <input type="text" /> */}
        <input
          type="submit"
          className="create-child-task-form__submit"
          value="Add step"
        />
      </form>
      <p>1/4</p>
    </div>
  );
}
