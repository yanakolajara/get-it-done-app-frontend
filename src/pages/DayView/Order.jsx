import React, { useState } from "react";
import { handleCreateNewTask } from "./helpers/Tasks";
import "./styles/Order.scss";
import OrderTask from "./OrderTask";

export default function Order({ props }) {
  const { arrayOfTasks, fetchData } = props;
  const [newTaskContent, setNewTaskContent] = useState("");
  const [hideCreateTaskForm, setHideCreateTaskForm] = useState("hide");

  const displayTasks = () => {
    return arrayOfTasks.map((task) => {
      return <OrderTask props={{ task, fetchData }} />;
    });
  };

  return (
    <div className="container unstaged-tasks">
      <h1>Task order</h1>
      <button
        className="btn-create"
        onClick={() =>
          setHideCreateTaskForm(hideCreateTaskForm === "hide" ? "show" : "hide")
        }
      >
        Create Task
      </button>
      <form
        className={`create-task-form-${hideCreateTaskForm}`}
        onSubmit={async (e) => {
          e.preventDefault();
          await handleCreateNewTask(newTaskContent);
          fetchData();
        }}
      >
        <label htmlFor="content">Content</label>
        <input
          className="create-task-form__content"
          type="text"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
        <input className="create-task-form__submit-btn" type="submit" />
      </form>
      <div className="order__tasks">{displayTasks()}</div>
    </div>
  );
}
