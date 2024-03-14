import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { handleCreateNewTask } from "./helpers/Tasks";
import "./styles/Order.scss";
// import TaskContainer from "./TaskContainer";

export default function Order({ props }) {
  const { arrayOfTasks, fetchData } = props;
  const [newTaskContent, setNewTaskContent] = useState("");
  const [hideCreateTaskForm, setHideCreateTaskForm] = useState("hide");

  const displayTasks = () => {
    return arrayOfTasks.map((task) => {
      return (
        <div className="order__tasks__task">
          <MdDragIndicator className="order__tasks__task__hover" />
          <p>{task.content}</p>
          <div className="order__tasks__task__options">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      );
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
