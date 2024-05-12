import "./Day.scss";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import { EditTasks } from "./EditTasks";
import { EditSteps } from "./EditSteps";
// import ListTask from "../../components/Task/components/TaskContainer";
// import EditStepForm from "../../components/Task/components/EditStepsContainer/EditStepForm";
// import NewStepForm from "../../components/Task/CreateStepForm";
import { Task } from "../../components/Task/Task";
import { Step } from "../../components/Step/Step";
function Day() {
  const navigate = useNavigate();

  const {
    data: tasks,
    loading,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onEditStep,
    onDeleteStep,
    // onGetTask,
  } = useData();

  return (
    <div className="day">
      <EditTasks
        tasks={tasks}
        loading={loading}
        onCreate={onCreateTask}
        onLoading={() => <Loader />}
      >
        {(data) => (
          <Task
            data={data}
            role="static"
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        )}
      </EditTasks>

      <EditSteps tasks={tasks} loading={loading} onLoading={() => <Loader />}>
        {(data) => (
          <Task data={data} role="container" createStep={onCreateStep}>
            {(data) => (
              <Step
                data={data}
                role="static"
                onDelete={onDeleteStep}
                onEdit={onEditStep}
              />
            )}
          </Task>
        )}
      </EditSteps>

      <button onClick={() => navigate("/day/start")}>Create</button>
    </div>
  );
}

export { Day };
