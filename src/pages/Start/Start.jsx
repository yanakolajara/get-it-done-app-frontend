import "./Start.scss";
import { Task } from "./components/Task";
import useTask from "../Day/hooks/useTask";

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
  return (
    <div className="Start">
      <div className="Start__container container-glass">
        {listOfTasks.map((task) => (
          <Task data={task} />
        ))}
      </div>
    </div>
  );
}

export { Start };
