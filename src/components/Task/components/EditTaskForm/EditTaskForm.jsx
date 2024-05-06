import { MdCancel, MdCheckCircle } from "react-icons/md";
import React, { useState } from "react";
import handleEditTask from "../../../../hooks/useData";

export default function EditTaskForm(props) {
  //   <EditTaskForm
  //   content={taskObj.content}
  //   id={taskObj.id}
  //   onEdit={(id, body) => onEdit(id, body)}
  // />
  const [editedText, setEditedText] = useState(props.content);
  return (
    <>
      {/* <form
        className="order-task__edit"
        onSubmit={async (e) => {
          e.preventDefault();
          await props.onEdit(props.id, {
            content: editedText,
          });
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
      </form> */}
    </>
  );
}
