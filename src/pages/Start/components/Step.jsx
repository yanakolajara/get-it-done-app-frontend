import React from "react";
import "./Step.scss";

function Step(props) {
  return (
    <>
      <article
        className={`stepContainer button ${props.isCompleted && "completed"}`}
        onClick={async (e) => {
          e.preventDefault();
          await props.onComplete(props.stepData.id, {
            isCompleted: !props.stepData.completed,
          });
        }}
      >
        <p className="childTask__content">{props.stepData.content}</p>
      </article>
    </>
  );
}

export { Step };
