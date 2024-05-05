import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import "./Start.scss";
import { useNavigate } from "react-router-dom";

function Start() {
  const { states, updaters } = useData();
  const { data, loading } = states;
  const {
    onGetTask,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onEditStep,
    onDeleteStep,
  } = updaters;
  const navigate = useNavigate();
  return (
    <main className="Start">
      <section className="Start__container container-glass">
        {data.map((task) => (
          <Task data={task} role="start" />
        ))}
      </section>
      <button onClick={() => navigate("/day")}>Back to Edit</button>
    </main>
  );
}

export { Start };
