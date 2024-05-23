import React from "react";
import "./Day.scss";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import Loader from "../../components/Loader/Loader";
import { EditTasks } from "./EditTasks";
import { EditSteps } from "./EditSteps";
// import ListTask from "../../components/Task/components/TaskContainer";
// import EditStepForm from "../../components/Task/components/EditStepsContainer/EditStepForm";
// import NewStepForm from "../../components/Task/CreateStepForm";
import { Task } from "../../components/Task/Task";
import { Step } from "../../components/Step/Step";
import { Start } from "../Start/Start";
function Day() {
  const navigate = useNavigate();
  const [queries, setQueries] = useSearchParams();
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
  } = useTasks();

  if (queries.get("status") === "start") return <Start />;
  return (
    <React.Fragment>
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

        <button onClick={() => setQueries({ status: "start" })}>Create</button>
      </div>
    </React.Fragment>
  );
}

export { Day };
