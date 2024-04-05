import React, { useState } from "react";

export default function NewStepForm(props) {
  const [newTaskContent, setNewTaskContent] = useState("");
  return (
    <form
      className="create-child-task-form"
      onSubmit={async (e) => {
        e.preventDefault();
        await props.handleAddStep(props.task_id, {
          content: newTaskContent,
        });
      }}
    >
      <input
        type="text"
        className="create-child-task-form__contsent"
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      {/* <input type="" /> */}
      {/* <input type="text" /> */}
      <input
        type="submit"
        className="create-child-task-form__submit"
        value="Add step"
      />
    </form>
  );
}
