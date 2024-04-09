import "./index.scss";

export default function List(props) {
  const renderFunc = props.children || props.render;
  return (
    <div className="container-glass staged_tasks">
      <h1>Staged Tasks</h1>
      <div className="staged-tasks-container">
        {props.isLoading && props.onLoading()}
        {!props.isLoading && props.listOfTasks.map(renderFunc)}
      </div>
    </div>
  );
}
