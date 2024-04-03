import { MdCancel, MdCheckCircle } from "react-icons/md";

import React, { useState } from "react";
import { handleEditTask } from "./helpers/Tasks";

export default function OrderTaskForm(props) {
  const [isEditMenuOn, setIsEditMenuOn] = useState(false);
  const [editedText, setEditedText] = useState(props.content);
  return (
    <form
      className="order-task__edit"
      onSubmit={async (e) => {
        e.preventDefault();
        const editedTask = await handleEditTask(props.id, {
          content: editedText,
        });
        props.content = editedTask.data.content;
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
          props.setShowForm(!props.showForm);
        }}
      >
        <MdCancel className="order-task__edit__btn__cancel" />
      </button>
      <button className="order-task__edit__btn" type="submit">
        <MdCheckCircle className="order-task__edit__btn__submit" />
      </button>
    </form>
  );
}
