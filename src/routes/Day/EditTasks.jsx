import "./EditTasks.scss";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
// import { render } from "@testing-library/react";

function EditTasks(props) {
  const [content, setContent] = React.useState();
  const renderFunc = props.children || props.render;

  const createTask = (e) => {
    console.log(e);
    e.preventDefault();
    props.onCreate({ body: { content } });
  };

  return (
    <div className="container-glass orderTaskContainer">
      <h1>Edit Tasks</h1>
      <form className="create-task-form" onSubmit={(e) => createTask(e)}>
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
