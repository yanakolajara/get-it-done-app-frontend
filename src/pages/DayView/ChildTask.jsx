import React from "react";
import "./styles/ChildTasks.scss";

export default function ({ props }) {
  const {
    completed,
    content,
    details_id,
    emotional_energy,
    id,
    parenttask_id,
    physical_energy,
    position,
  } = props;

  return (
    <div className="childTask">
      <p className="childTask__content">{content}</p>
      <div className="childTask__options">
        <button>🔽</button>
        <button>✅</button>
      </div>
    </div>
  );
}
