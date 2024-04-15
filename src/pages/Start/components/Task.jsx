import "./Task.scss";

function Task(props) {
  console.log("🚀 ~ Task ~ props:", props);
  return (
    <section className="Task">
      <header className="taskContainer__header">
        <p className="taskContainer__header__title">{props.taskData.content}</p>
      </header>
      <footer>
        <p>0/{props.taskData.childTasks.length}</p>
      </footer>
    </section>
  );
}

export { Task };
