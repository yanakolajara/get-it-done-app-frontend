import "./Day.scss";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import { EditTasks } from "./EditTasks";
import { EditSteps } from "./EditSteps";

import ListTask from "../../components/Task/TaskContainer";
import EditStepForm from "./EditStepsContainer/EditStepForm";
// import NewStepForm from "../../components/Task/CreateStepForm";
import { Task } from "../../components/Task/Task";
import { Step } from "../../components/Step/Step";
function Day() {
  const navigate = useNavigate();
  const { states, updaters } = useData();
  const { data: tasks, loading } = states;
  const {
    onGetTask,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onEditStep,
    onDeleteStep,
  } = updaters;

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
      {/* <List tasks={tasks} loading={loading} onLoading={() => <Loader />}>
        {(taskObj) => (
          <ListTask
            taskObj={taskObj}
            loading={loading}
            onLoading={() => <Loader />}
            newStepForm={() => (
              <NewStepForm
                taskId={taskObj.id}
                handleAddStep={(taskId, body) => onCreateStep(taskId, body)}
              />
            )}
          >
            {taskObj.childTasks.map((stepObj) => (
              <Step
                stepObj={stepObj}
                onDelete={(step_id) => onDelete(step_id)}
                onComplete={(step_id, body) => onEdit(step_id, body)}
              >

              </Step>
            ))}
          </ListTask>
        )}
      </List> */}
      <button onClick={() => navigate("/day/start")}>Create</button>
    </div>
  );
}

export { Day };
