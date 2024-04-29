import "./EditTasks.scss";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { render } from "@testing-library/react";

function EditTasks(props) {
  const [content, setContent] = useState();
  const renderFunc = props.children || props.render;

  const createTask = (e) => {
    e.preventDefault();
    props.onCreate({ body: { content } });
  };

  return (
    <div className="container-glass orderTaskContainer">
      <h1>Edit Tasks</h1>
      <form className="create-task-form" onSubmit={createTask}>
        <input
          className="create-task-form__content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
