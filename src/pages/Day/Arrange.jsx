import "./Arrange.scss";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { render } from "@testing-library/react";

function Arrange(props) {
  const [newTaskContent, setNewTaskContent] = useState();
  const renderFunc = props.children || props.render;
  console.log(props);
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
        {props.tasks.map((props) =>
          new renderFunc({
            ...props,
          }).render()
        )}
      </form>
    </div>
  );
}

export { Arrange };
