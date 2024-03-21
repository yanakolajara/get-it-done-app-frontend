import React from "react";
import { handleDeleteChildTask } from "./helpers/ChildTasks";
import "./styles/ChildTasks.scss";

export default function ({ props }) {
  const { childTask, fetchData } = props;
  const {
    completed,
    content,
    emotional_energy,
    id,
    parenttask_id,
    physical_energy,
    position,
  } = childTask;

  return (
    <div className="childTask">
      <p className="childTask__content">{content}</p>
      <div className="childTask__options">
        <button
          onClick={async (e) => {
            e.preventDefault();
            await handleDeleteChildTask(id);
            fetchData();
          }}
        >
          🗑️
        </button>
        <button>✅</button>
      </div>
    </div>
  );
}
