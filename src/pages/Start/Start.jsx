import { useTask } from "../../hooks/useTask";
import { Step } from "./components/Step";
import "./Start.scss";
import { Task } from "./components/Task";

function Start() {
  const {
    listOfTasks,
    isLoading,
    onStart,
    setOnStart,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleAddStep,
    handleDeleteStep,
    handleCompleteStep,
  } = useTask();
  console.log(useTask());
  return (
    <div className="Start">
      <div className="Start__container container-glass">
        {listOfTasks.map((taskData) => (
          <Task taskData={taskData}>
            {(stepData) => (
              <Step
                stepData={stepData}
                isCompleted={stepData.completed}
                onComplete={handleCompleteStep}
              />
            )}
          </Task>
        ))}
      </div>
    </div>
  );
}

export { Start };
