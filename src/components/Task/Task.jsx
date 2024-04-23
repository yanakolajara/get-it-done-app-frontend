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
  }
  // taskObj={taskObj} onDelete={(taskId) => onDelete({ taskId })

  render() {
    console.log(this);
    return (
      <div className={`${this.role}-task`}>
        {/* {this.state.showForm && children} */}
        <React.Fragment>
          <MdDragIndicator className={`${this.role}-task__drag-icon`} />
          <p>{this.data.content}</p>
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
        </React.Fragment>
        {this.role === "container" && this.data.steps.map(this.children)}
      </div>
    );
  }
}

export { Task };
