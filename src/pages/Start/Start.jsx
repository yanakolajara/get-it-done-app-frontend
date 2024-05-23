import { Step } from "../../components/Step/Step";
import { Task } from "../../components/Task/Task";
import { useTasks } from "../../hooks/useTasks";
import "./Start.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import ScrollArea from "react-scrollbar";
// import { processStepCompletion } from "../../utils/processStepCompletion";

function Start() {
  const [queries, setQueries] = useSearchParams();
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
  } = useTasks();
  const goToEdit = (e) => {
    e.preventDefault();
    setQueries({ status: "edit" });
  };

  return (
    <main className="Start">
      <div className="Start__container container-glass">
        {data.map((task) => (
          <Task data={task} role="start">
            {(data) => <Step data={data} role="start" onEdit={onEditStep} />}
          </Task>
        ))}
      </div>
      <button onClick={goToEdit}>Back to Edit</button>
    </main>
  );
}

export { Start };
