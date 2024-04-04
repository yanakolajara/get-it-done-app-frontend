import React, { useEffect, useState } from "react";
import "./styles/ChildTasks.scss";

export default function ({ props }) {
  return (
    <div className={`childTask`}>
      <p className="childTask__content">{props.content}</p>
      <div className="childTask__options">
        <button
          onClick={async (e) => {
            e.preventDefault();
            // await handleDeleteTask(props.id);
            //FIXME: manualRender();
          }}
        >
          🗑️
        </button>
        <button
        // FIXME" create a change completion status function on the custom hook
        // onClick={async (e) => {
        //   e.preventDefault();
        //   await changeCompletionStatus(props.id, {
        //     isCompleted: !completed,
        //   });
        //   manualRender();
        // }}
        >
          ✅
        </button>
      </div>
    </div>
  );
}
