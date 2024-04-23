import React from "react";
// import { MdDragIndicator } from "react-icons/md";
// import { TiEdit } from "react-icons/ti";
// import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Step.scss";

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formInput: "",
      loading: false,
    };
    this.data = props.data;
    this.role = props.role;
  }
  // taskObj={taskObj} onDelete={(taskId) => onDelete({ taskId })

  render() {
    return (
      <article className={`${this.role}-step`}>
        <p className="childTask__content">{this.data.content}</p>
        <div className="childTask__options">
          <button
            onClick={async (e) => {
              e.preventDefault();
              await this.onDeleteStep(this.data.id);
            }}
          >
            🗑️
          </button>
          <button
            onClick={async (e) => {
              e.preventDefault();
              await this.onCompleteStep(this.data.id, {
                isCompleted: !this.data.completed,
              });
            }}
          >
            ✅
          </button>
        </div>
      </article>
    );
  }
}

export { Step };
