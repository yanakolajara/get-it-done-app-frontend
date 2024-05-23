import { completedStepsCount } from "../../../utils/completedStepsCount";
import "./Task.scss";

function Task(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="Task">
      <header className="taskContainer__header">
        <p className="taskContainer__header__title">{props.taskData.content}</p>
      </header>
      <article>{props.taskData.childTasks.map(renderFunc)}</article>
      <footer>
        <p>
          {completedStepsCount(props.taskData)}/
          {props.taskData.childTasks.length}
        </p>
      </footer>
    </section>
  );
}

// export { Task };
