import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { handleCreateNewTask } from "./helpers/Tasks";
import OrderTask from "./OrderTask";
import "./styles/Order.scss";

export default function Order({ children }) {
  // const { arrayOfTasks, fetchData } = props;
  // const [newTaskContent, setNewTaskContent] = useState("");
  // const [hideCreateTaskForm, setHideCreateTaskForm] = useState("hide-form");

  // const displayTasks = () => {
  //   return arrayOfTasks.map((task) => {
  //     return <OrderTask props={{ task, fetchData }} />;
  //   });
  // };

  return (
    <div className="container-glass orderTaskContainer">
      {/* <h1>Task order</h1>
      <button
        className="btn-create"
        onClick={() =>
          setHideCreateTaskForm(
            hideCreateTaskForm === "hide-form" ? "show-form" : "hide-form"
          )
        }
      >
        Create Task
      </button>
      <form
        className={`create-task-form ${hideCreateTaskForm}`}
        onSubmit={async (e) => {
          e.preventDefault();
          await handleCreateNewTask(newTaskContent);
          setHideCreateTaskForm("hide-form");
          fetchData();
        }}
      >
        <input
          className="create-task-form__content"
          type="text"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
        <button className="create-task-form__submit-btn" type="submit">
          <IoMdAddCircle className="create-task-form__submit-btn__icon" />
        </button>
      </form>
      {displayTasks()} */}
      {children}
    </div>
  );
}
