import { Step } from "../../components/Step/Step";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import "./Start.scss";
import { useNavigate } from "react-router-dom";
// import { processStepCompletion } from "../../utils/processStepCompletion";

function Start() {
  const {
    // loading,
    // onGetTask,
    // onCreateTask,
    // onEditTask,
    // onDeleteTask,
    // onCreateStep,
    // onDeleteStep,
    data,
    onEditStep,
  } = useData();
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
