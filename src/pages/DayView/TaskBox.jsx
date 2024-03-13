import "./styles/TaskBox.scss";
import { deleteTaskWithTaskId, editTaskWithTaskId } from "../../api/api";
import { useState } from "react";

export default function TaskBox(taskClass) {
  const taskObj = taskClass.obj;
  const [toggleMenu, setToggleMenu] = useState("hide");
  const [editTaskContent, setEditTaskContent] = useState("");
  const deleteTask = async () => {
    try {
      //TODO: Change user ID once auth has been implemented
      deleteTaskWithTaskId(taskObj.id);
    } catch (error) {
      console.error(error);
    }
  };

  const editTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      editTaskWithTaskId(taskObj.id, {
        details_id: taskObj.details_id,
        content: editTaskContent,
        progress_state: taskObj.progress_state,
        is_staged: taskObj.is_staged,
        date: taskObj.date,
      });
      setEditTaskContent("");
      setToggleMenu(toggleMenu === "hide" ? "show" : "hide");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="taskBox" id={taskObj.id}>
      <p className="taskBox__content">{taskObj.content}</p>
      <div className="taskBox__actions">
        <button className="taskBox__actions__btn">Stage</button>
        <button
          className="taskBox__actions__btn"
          onClick={() => setToggleMenu(toggleMenu === "hide" ? "show" : "hide")}
        >
          Edit
        </button>
        <button
          className="taskBox__actions__btn"
          onClick={(e) => deleteTask(e)}
        >
          Delete
        </button>
        <form
          className={`taskBox__edit-menu__${toggleMenu}`}
          onSubmit={(e) => editTaskSubmit(e)}
        >
          <input
            type="text"
            value={editTaskContent}
            onChange={(e) => setEditTaskContent(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
