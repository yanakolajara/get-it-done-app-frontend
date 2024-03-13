import React, { useState } from "react";
import TaskBox from "./TaskBox";
import { createNewTask } from "../../api/api";
import Task from "./Task";
import "./styles/UnstagedTasks.scss";

export default function UnstagedTasks(arrayOfTasks, setArrayOfTasks) {
  const [newTaskContent, setNewTaskContent] = useState("");

  const handleCreateNewTask = async (e) => {
    e.preventDefault();
    try {
      const date = new Date();
      const currDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      //TODO: Change user ID when the auth system is set up
      const newTask = await createNewTask(1, {
        details_id: null,
        content: newTaskContent,
        progress_state: "1",
        is_staged: false,
        date: currDate,
      });
      setNewTaskContent("");
      setArrayOfTasks(...arrayOfTasks.data, new Task(newTask.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container unstaged-tasks">
      <h1>Tasks box</h1>
      <button
        className="btn-create"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Create Task
      </button>
      <form
        className="create-task-form"
        onSubmit={(e) => handleCreateNewTask(e)}
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
      {arrayOfTasks.data.map((task) => {
        return task.is_staged ? "" : <TaskBox obj={task} />;
      })}
    </div>
  );
}
