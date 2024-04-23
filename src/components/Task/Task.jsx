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
  }
  // taskObj={taskObj} onDelete={(taskId) => onDelete({ taskId })

  render() {
    return (
      <div className="order-task">
        {/* {this.state.showForm && children} */}

        <React.Fragment>
          <MdDragIndicator className="order-task__drag-icon" />
          <p>{this.props.content}</p>
          <div className="order-task__options">
            <TiEdit
              className="order-task__options__icon"
              onClick={() =>
                this.setState((prevState) => ({
                  showForm: !prevState.showForm,
                }))
              }
            />
            <RiDeleteBin5Fill
              className="order-task__options__icon"
              onClick={async (e) => {
                e.preventDefault();
                await this.props.onDelete(this.props.id);
              }}
            />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export { Task };
