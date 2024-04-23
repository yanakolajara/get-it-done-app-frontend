import { useData } from "../../hooks/useData";
import { Step } from "./components/Step";
import "./Start.scss";
import { Task } from "./components/Task";
import { Navigate, useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  // const {
  //   listOfTasks,
  //   isLoading,
  //   onStart,
  //   setOnStart,
  //   handleCreateTask,
  //   handleDeleteTask,
  //   handleEditTask,
  //   handleAddStep,
  //   handleDeleteStep,
  //   handleCompleteStep,
  // } = useData();
  // console.log(useTask());
  return (
    <div className="Start">
      {/* <div className="Start__container container-glass">
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
      <button onClick={() => navigate("/day")}>Back to Edit</button> */}
    </div>
  );
}

export { Start };
