import React from "react";
// import { MdDragIndicator } from "react-icons/md";
// import { TiEdit } from "react-icons/ti";
// import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Step.scss";
// import Loader from "../Loader/Loader";

export default function Step(props) {
  // const [showForm, setShowForm] = React.useState(false);
  // const [content, setContent] = React.useState("");
  // const [loading, setLoading] = React.useState(false);

  const switchStatus = (e) => {
    e.preventDefault();
    props.onEdit({
      stepId: props.data.id,
      body: {
        ...props.data,
        completed: !props.data.completed,
      },
    });
  };

  // this.state.loading && <Loader />;
  switch (props.role) {
    case "manage-steps":
      return (
        <article className="static-step">
          <p className="static-step__content">{props.data.content}</p>
          <div className="static-step__options">
            {/* <button onClick={() => props.onDelete({ stepId: props.data.id })}>
              🗑️
            </button>
            <button onClick={switchStatus}>✅</button> */}
          </div>
        </article>
      );

    case "start":
      return (
        <article
          className={`static-step ${props.data.completed && "completed"}`}
        >
          <p className="static-step__content">{props.data.content}</p>
          <button onClick={switchStatus}>Complete</button>
        </article>
      );
    default:
      return null;
  }
}
