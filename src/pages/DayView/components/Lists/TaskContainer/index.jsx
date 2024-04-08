import "./index.scss";

export default function TaskContainer(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="taskContainer">
      <header className="taskContainer__header">
        <p className="taskContainer__header__title">{props.taskObj.content}</p>
        {props.newStepForm()}
      </header>
      {renderFunc}
      <footer>
        <p>0/{renderFunc.length}</p>
      </footer>
    </section>
  );
}
