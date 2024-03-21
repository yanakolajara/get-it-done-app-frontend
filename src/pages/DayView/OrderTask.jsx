import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { deleteTaskWithTaskId } from "../../api/api";
import { handleEditTask } from "./helpers/Tasks";

export default function OrderTask({ props }) {
  const { task, fetchData } = props;
  const [isEditMenuOn, setIsEditMenuOn] = useState(false);
  const [editedText, setEditedText] = useState("");

  return (
    <div className="order__tasks__task">
      {(isEditMenuOn && (
        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const editedTask = await handleEditTask(task.id, {
                content: editedText,
              });
              task.content = editedTask.data.content;
              setIsEditMenuOn(!isEditMenuOn);
            }}
          >
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <input type="submit" />
          </form>
          <button onClick={(e) => setIsEditMenuOn(!isEditMenuOn)}>back</button>
        </>
      )) || (
        <>
          <MdDragIndicator className="order__tasks__task__hover" />
          <p>{task.content}</p>
          <div className="order__tasks__task__options">
            <button onClick={(e) => setIsEditMenuOn(!isEditMenuOn)}>
              edit
            </button>
            <button
              onClick={async (e) => {
                e.preventDefault();
                await deleteTaskWithTaskId(task.id);
                fetchData();
              }}
            >
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
