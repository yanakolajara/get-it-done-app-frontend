import useTask from "./hooks/useTask";
import Loader from "../../components/Loader";
import Arrange from "./components/Arrange";
import Task from "./components/Arrange/Task";
import EditTaskForm from "./components/Arrange/EditTaskForm";
import NewTaskForm from "./components/Arrange/NewTaskForm";
import List from "./components/Lists";
import ListTask from "./components/Lists/TaskContainer";
import Step from "./components/Lists/Step";
import EditStepForm from "./components/Lists/EditStepForm";
import NewStepForm from "./components/Lists/NewStepForm";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function Day() {
  const navigate = useNavigate();
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
    <div className="day">
      <Arrange
        listOfTasks={listOfTasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
      >
        {(taskObj) => (
          <Task
            taskObj={taskObj}
            onDelete={(task_id) => handleDeleteTask(task_id)}
          >
            <EditTaskForm
              content={taskObj.content}
              id={taskObj.id}
              onEdit={(id, body) => handleEditTask(id, body)}
            />
          </Task>
        )}
      </Arrange>

      <List
        listOfTasks={listOfTasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
      >
        {(taskObj) => (
          <ListTask
            taskObj={taskObj}
            isLoading={isLoading}
            onLoading={() => <Loader />}
            newStepForm={() => (
              <NewStepForm
                task_id={taskObj.id}
                handleAddStep={(task_id, body) => handleAddStep(task_id, body)}
              />
            )}
          >
            {taskObj.childTasks.map((stepObj) => (
              <Step
                stepObj={stepObj}
                onDelete={(step_id) => handleDeleteStep(step_id)}
                onComplete={(step_id, body) =>
                  handleCompleteStep(step_id, body)
                }
              >
                {/* <EditStepForm /> */}
              </Step>
            ))}
          </ListTask>
        )}
      </List>
      <button onClick={() => navigate("/start")}>Create</button>
    </div>
  );
}

export { Day };
