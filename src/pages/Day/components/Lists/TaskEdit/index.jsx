import { render } from "@testing-library/react";
import { completedStepsCount } from "../../../../../utils/completedStepsCount";
import "./index.scss";

function TaskEdit(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="taskContainer">
      <header className="taskContainer__header">
        <p className="taskContainer__header__title">{props.taskObj.content}</p>
        {props.newStepForm()}
      </header>
      <main className="taskContainer__tasks">{renderFunc}</main>

      <footer>
        <p className="taskContainer__counter">
          {completedStepsCount(props.taskObj)}/{renderFunc.length}
        </p>
      </footer>
    </section>
  );
}

export { TaskEdit };
