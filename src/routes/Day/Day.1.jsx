import { useNavigate, useSearchParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import { EditTasks } from "./EditTasks";
import { EditSteps } from "./EditSteps";
import { Task } from "../../components/Task/Task";
import { Step } from "../../components/Step/Step";

function Day() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(searchParams.get("date"));
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
