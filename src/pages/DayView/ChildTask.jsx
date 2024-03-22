import React, { useEffect, useState } from "react";
import {
  handleDeleteChildTask,
  handleChangeCompletionStatus,
} from "./helpers/ChildTasks";
import "./styles/ChildTasks.scss";
import { changeCompletionStatus, deleteChildTask } from "../../api/api";

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
  const [isLoading, setIsLoading] = useState(false);

  function manualRender() {
    setIsLoading(true);
    setTimeout(() => {
      console.log("TEST HERE");
    }, 100);
    setIsLoading(false);
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={`childTask ${completed && "completed"}`}>
      <p className="childTask__content">{content}</p>
      <div className="childTask__options">
        <button
          onClick={async (e) => {
            e.preventDefault();
            await deleteChildTask(id);
            manualRender();
          }}
        >
          🗑️
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            await changeCompletionStatus(id, {
              isCompleted: !completed,
            });
            manualRender();
          }}
        >
          ✅
        </button>
      </div>
    </div>
  );
}
