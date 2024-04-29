import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Task.scss";

function Task(props) {
  const [data, setData] = React.useState(props.data);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);

  const createStep = (e) => {
    e.preventDefault();
    props
      .createStep({
        taskId: props.data.id,
        body: {
          content: content,
        },
      })
      .then(() => {
        setContent("");
      });
  };

  const deleteStep = (e) => {
    e.preventDefault();
    props.deleteStep({
      stepId: props.data.id,
    });
  };

  if (props.loading) {
    return props.onLoading();
  }

  switch (props.role) {
    case "edit":
      return (
        <section className="edit-task">
          <MdDragIndicator className="edit-task__drag-icon" />
          <div className="edit-task__box">
            <p className="edit-task__content">{props.data.content}</p>
          </div>
          <div className="edit-task__options">
            <TiEdit
              className="edit-task__options__icon"
              onClick={() => setShowForm(!showForm)}
            />
            <RiDeleteBin5Fill
              className="edit-task__options__icon"
              onClick={deleteStep}
            />
          </div>
        </section>
      );
    case "container":
      return (
        <article className="container-task">
          <header>
            <p>{props.data.content}</p>
            <form onSubmit={createStep}>
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
