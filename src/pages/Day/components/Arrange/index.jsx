import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import "./index.scss";

export default function Arrange(props) {
  const renderFunc = props.loading
    ? props.onLoading
    : props.children || props.render;
  const [newTaskContent, setNewTaskContent] = useState();

  return (
    <div className="container-glass orderTaskContainer">
      <h1>Task order</h1>
      <form
        className="create-task-form"
        onSubmit={async (e) => {
          e.preventDefault();
          await props.onCreate({ content: newTaskContent });
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
      {props.listOfTasks.map(renderFunc)}
    </div>
  );
}
