import { useTask } from "../../hooks/useTask";
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
        {listOfTasks.map((task) => {
          return <Task taskData={task} />;
        })}
      </div>
    </div>
  );
}

export { Start };
