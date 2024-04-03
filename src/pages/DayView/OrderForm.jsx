import React, { useState } from "react";
import { handleCreateNewTask } from "./helpers/Tasks";
import { IoMdAddCircle } from "react-icons/io";

export default function OrderForm() {
  const [newTaskContent, setNewTaskContent] = useState();
  return (
    <form
      className="create-task-form"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleCreateNewTask(newTaskContent);
      }}
    >
      <input
        className="create-task-form__content"
        type="text"
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      <button className="create-task-form__submit-btn" type="submit">
        <IoMdAddCircle className="create-task-form__submit-btn__icon" />
      </button>
    </form>
  );
}
