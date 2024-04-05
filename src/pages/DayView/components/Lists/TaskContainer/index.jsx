import "./index.scss";

export default function TaskContainer(props) {
  const renderFunc = props.children || props.render;
  return (
    <div className="taskContainer">
      <h2>{props.taskObj.content}</h2>
      {renderFunc}
      <p>1/4</p>
    </div>
  );
}
