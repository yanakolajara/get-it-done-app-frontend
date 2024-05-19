import "./Day.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const { state } = useLocation();
  const { year, month, monthName, day, dayName } = state.date;
  const {
    data: tasks,
    loading,
    // onGetTaskWithDate,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onEditStep,
    onDeleteStep,
    // onGetTask,
  } = useData();

  // console.log(onGetTaskWithDate({ date: { year, month, day } }));

  return (
    <div className="day">
      <button onClick={() => navigate("/calendar")}>Back</button>
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
