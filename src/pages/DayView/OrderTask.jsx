import React, { useState } from "react";
import { MdDragIndicator, MdCancel, MdCheckCircle } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteTaskWithTaskId } from "../../api/api";
import { handleEditTask } from "./helpers/Tasks";
import "./styles/OrderTask.scss";

export default function OrderTask({ props }) {
  const { task, fetchData } = props;
  const [isEditMenuOn, setIsEditMenuOn] = useState(false);
  const [editedText, setEditedText] = useState(task.content);
  return (
    <div className="order-task">
      {(isEditMenuOn && (
        <>
          <form
            className="order-task__edit"
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
              className="order-task__edit__content"
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button
              className="order-task__edit__btn"
              onClick={(e) => {
                setIsEditMenuOn(!isEditMenuOn);
              }}
            >
              <MdCancel className="order-task__edit__btn__cancel" />
            </button>
            <button className="order-task__edit__btn" type="submit">
              <MdCheckCircle className="order-task__edit__btn__submit" />
            </button>
          </form>
        </>
      )) || (
        <>
          <MdDragIndicator className="order-task__drag-icon" />
          <p>{task.content}</p>
          <div className="order-task__options">
            <TiEdit
              className="order-task__options__icon"
              onClick={(e) => setIsEditMenuOn(!isEditMenuOn)}
            />
            <RiDeleteBin5Fill
              className="order-task__options__icon"
              onClick={async (e) => {
                e.preventDefault();
                await deleteTaskWithTaskId(task.id);
                fetchData();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
