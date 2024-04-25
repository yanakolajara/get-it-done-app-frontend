import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Task.scss";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formInput: "",
      loading: false,
    };
    this.data = props.data;
    this.role = props.role;
    this.children = props.children;
    this.onEdit = props.onEdit;
  }
  // taskObj={taskObj} onDelete={(taskId) => onDelete({ taskId })

  render() {
    switch (this.role) {
      case "edit":
        return (
          <div className={`${this.role}-task`}>
            {/* {this.state.showForm && children} */}
            <MdDragIndicator className={`${this.role}-task__drag-icon`} />
            <div className={`${this.role}-task__box`}>
              <p className={`${this.role}-task__content`}>
                {this.data.content}
              </p>
            </div>
            <div className={`${this.role}-task__options`}>
              <TiEdit
                className={`${this.role}-task__options__icon`}
                onClick={() =>
                  this.setState((prevState) => ({
                    showForm: !prevState.showForm,
                  }))
                }
              />
              <RiDeleteBin5Fill
                className={`${this.role}-task__options__icon`}
                onClick={async (e) => {
                  e.preventDefault();
                  await this.data.onDelete(this.data.id);
                }}
              />
            </div>
            {this.role === "container" && this.data.steps.map(this.children)}
          </div>
        );

      case "container":
        return (
          <article className="container-task">
            <header className="container-task__header">
              <p>{this.data.content}</p>
            </header>
            <section>{this.data.steps.map(this.children)}</section>
          </article>
        );
      default:
        return this.children;
    }
  }
}

export { Task };
