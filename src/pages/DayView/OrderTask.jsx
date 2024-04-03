import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { deleteTaskWithTaskId } from "../../api/api";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./styles/OrderTask.scss";
import OrderTaskForm from "./OrderTaskForm";

export default function OrderTask(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="order-task">
      {showForm && (
        <OrderTaskForm
          content={props.content}
          id={props.id}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      )}
      {!showForm && (
        <React.Fragment>
          <MdDragIndicator className="order-task__drag-icon" />
          <p>{props.content}</p>
          <div className="order-task__options">
            <TiEdit
              className="order-task__options__icon"
              onClick={(e) => setShowForm(!showForm)}
            />
            <RiDeleteBin5Fill
              className="order-task__options__icon"
              onClick={async (e) => {
                e.preventDefault();
                await deleteTaskWithTaskId(props.id);
              }}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
