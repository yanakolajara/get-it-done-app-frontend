import "./EditTasks.scss";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { render } from "@testing-library/react";

function EditTasks(props) {
  const [newTaskContent, setNewTaskContent] = useState();
  const renderFunc = props.children || props.render;
  return (
    <div className="container-glass orderTaskContainer">
      <h1>Edit Tasks</h1>
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
        {props.loading && props.onLoading()}
        {!props.loading && props.tasks.map(renderFunc)}
      </form>
    </div>
  );
}

export { EditTasks };
