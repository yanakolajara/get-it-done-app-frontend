import "./Task.scss";

function Task({ props }) {
  console.log("🚀 ~ Task ~ props:", props);
  return (
    <section className="Task">
      {/* <header className="taskContainer__header">
        <p className="taskContainer__header__title">{props.task.content}</p>
        {props.newStepForm()}
      </header>
      <footer>
        <p>0/{renderFunc.length}</p>
      </footer> */}
    </section>
  );
}

export { Task };
