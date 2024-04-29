import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Task.scss";

function Task(props) {
  const [content, setContent] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);

  const handleSubmit = (e) => {
    console.log(e);
    // e.preventDefault();
    // props
    //   .createStep({
    //     taskId: props.data.id,
    //     body: {
    //       content,
    //     },
    //   })
    //   .then(() => {
    //     setContent("");
    //   });
  };

  const deleteTask = (e) => {
    e.preventDefault();
    props.onDelete({
      taskId: props.data.id,
    });
  };

  if (props.loading) {
    return props.onLoading();
  }

  switch (props.role) {
    case "static":
      return (
        <section className="static-task">
          <MdDragIndicator className="static-task__drag-icon" />

          <p className="static-task__content">{props.data.content}</p>
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
            <p>{props.data.content}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input type="submit" value="Add Step" />
            </form>
          </header>
          <section>{props.data.steps.map(props.children)}</section>
          <footer>
            <p>0/{props.data.steps.length}</p>
          </footer>
        </article>
      );
    default:
      return null;
  }
}

export { Task };
