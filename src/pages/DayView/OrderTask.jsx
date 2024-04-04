import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { deleteTaskWithTaskId } from "../../api/api";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./styles/OrderTask.scss";

export default function OrderTask(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="order-task">
      {showForm && props.children}
      {!showForm && (
        <React.Fragment>
          <MdDragIndicator className="order-task__drag-icon" />
          <p>{props.taskObj.content}</p>
          <div className="order-task__options">
            <TiEdit
              className="order-task__options__icon"
              onClick={(e) => setShowForm(!showForm)}
            />
            <RiDeleteBin5Fill
              className="order-task__options__icon"
              onClick={async (e) => {
                e.preventDefault();
                await props.onDelete(props.taskObj.id);
              }}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
