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
      formContent: "",
      loading: false,
    };
    this.data = props.data;
    this.createStep = this.createStep.bind(this);
    this.onLoading = props.onLoading;
  }

  async createStep(e) {
    e.preventDefault();
    await this.props.createStep({
      taskId: this.data.id,
      body: {
        content: this.state.formContent,
      },
    });
  }

  render() {
    this.state.loading && this.onLoading();
    switch (this.props.role) {
      case "edit":
        return (
          <section className="edit-task">
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
          </section>
        );

      case "container":
        return (
          <article className="container-task">
            <header>
              <p>{this.data.content}</p>
              <form onSubmit={this.createStep}>
                <input
                  type="text"
                  value={this.state.formContent}
                  onChange={(e) =>
                    this.setState({ formContent: e.target.value })
                  }
                />
                <input type="submit" value="Add Step" />
              </form>
            </header>
            <section>{this.data.steps.map(this.props.children)}</section>
            <footer>
              <p>0/{this.data.steps.length}</p>
            </footer>
          </article>
        );
      default:
        return null;
    }
  }
}

export { Task };
