import React from "react";
// import { MdDragIndicator } from "react-icons/md";
// import { TiEdit } from "react-icons/ti";
// import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Step.scss";
import Loader from "../Loader/Loader";

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

  async deleteStep(e) {
    e.preventDefault();
    await this.props.onDelete({ stepId: this.data.id });
  }

  async editStepStatus(e) {
    e.preventDefault();
    await this.props.onEdit({
      stepId: this.data.id,
      body: {
        ...this.data,
        isCompleted: !this.data.completed,
      },
    });
  }

  render() {
    this.state.loading && <Loader />;
    switch (this.role) {
      case "edit":
        return (
          <article className={`${this.role}-step`}>
            <p className={`${this.role}-step__content`}>{this.data.content}</p>
            <div className={`${this.role}-step__options`}>
              <button onClick={this.deleteStep}>🗑️</button>
              <button onClick={this.editStepStatus}>✅</button>
            </div>
          </article>
        );
      default:
        return null;
    }
  }
}

export { Step };
