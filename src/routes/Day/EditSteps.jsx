import "./EditSteps.scss";

function EditSteps(props) {
  const renderFunc = props.children || props.render;
  return (
    <div className="container-glass staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">
        {props.isLoading && props.onLoading()}
        {!props.isLoading && props.tasks.map(renderFunc)}
      </div>
    </div>
  );
}

export { EditSteps };
