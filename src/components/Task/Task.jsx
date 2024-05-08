import React from "react";
import { MdDragIndicator } from "react-icons/md";
import "./Task.scss";
// import { TiEdit } from "react-icons/ti";
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import { completedStepsCount } from "../../utils/completedStepsCount";

function Task(props) {
  const [content, setContent] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);
  const {
    // onEdit,
    data,
    role,
    onDelete,
    onLoading,
    createStep,
    loading,
    children,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    createStep({
      taskId: data.id,
      body: {
        content,
      },
    }).then(() => {
      setContent("");
    });
  };

  const deleteTask = (e) => {
    e.preventDefault();
    onDelete({
      taskId: data.id,
    });
  };

  if (loading) {
    return onLoading();
  }

  switch (role) {
    case "static":
      return (
        <section className="static-task">
          <MdDragIndicator className="static-task__drag-icon" />

          <p className="static-task__content">{data.content}</p>
          <div>
            <button
              className="btn task-static"
              onClick={(e) => {
                e.preventDefault();
                setShowForm(!showForm);
              }}
            >
              Edit
            </button>
            <button className="btn static-del" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </section>
      );
    case "container":
      return (
        <article className="container-task">
          <header>
            <p>{data.content}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input type="submit" value="Add Step" />
            </form>
          </header>
          <section>{data.steps.map(children)}</section>
          <footer>
            <p>0/{data.steps.length}</p>
          </footer>
        </article>
      );
    case "start":
      return (
        <section className="start-task">
          <header>
            <p>{data.content}</p>
          </header>
          <article>{data.steps.map(children)}</article>
          <footer>
            <p>
              <p>0/{data.steps.length}</p>
            </p>
          </footer>
        </section>
      );
    case "calendar":
      return (
        <section className="calendar-task">
          <p>{data.content}</p>
          <button
            className="btn task-calendar"
            onClick={(e) => {
              e.preventDefault();
              setShowForm(!showForm);
            }}
          >
            Edit
          </button>
          <button className="btn calendar-del" onClick={deleteTask}>
            Delete
          </button>
        </section>
      );
    default:
      return null;
  }
}

export { Task };
