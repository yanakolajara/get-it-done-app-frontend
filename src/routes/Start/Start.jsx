import { Step } from "../../components/Step/Step";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import { processStepCompletion } from "../../utils/processStepCompletion";
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
      <div className="Start__container container-glass">
        {data.map((task) => (
          <Task data={task} role="start">
            {(data) => <Step data={data} role="start" onEdit={onEditStep} />}
          </Task>
        ))}
      </div>
      <button onClick={() => navigate("/day")}>Back to Edit</button>
    </main>
  );
}

export { Start };
