import React, { useEffect, useState } from "react";
// import {
//   handleDeleteChildTask,
//   handleChangeCompletionStatus,
// } from "./helpers/ChildTasks";
import "./styles/ChildTasks.scss";
import { handleDeleteTask } from "./helpers/Tasks";
// import { changeCompletionStatus, deleteChildTask } from "../../api/api";

export default function ({ props }) {
  // const [isLoading, setIsLoading] = useState(false);

  // function manualRender() {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     console.log("TEST HERE");
  //   }, 100);
  //   setIsLoading(false);
  // }

  // if (isLoading) return <p>Loading...</p>;
  return (
    <div className={`childTask`}>
      <p className="childTask__content">{props.content}</p>
      <div className="childTask__options">
        <button
          onClick={async (e) => {
            e.preventDefault();
            await handleDeleteTask(props.id);
            //FIXME: manualRender();
          }}
        >
          🗑️
        </button>
        <button
        // FIXME" create a change completion status function on the custom hook
        // onClick={async (e) => {
        //   e.preventDefault();
        //   await changeCompletionStatus(id, {
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
