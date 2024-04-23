import "./Day.scss";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import { Arrange } from "./Arrange";

import List from "./components/Lists";
import ListTask from "./components/Lists/TaskContainer";
import Step from "./components/Lists/Step";
import EditStepForm from "./components/Lists/EditStepForm";
import NewStepForm from "./components/Lists/NewStepForm";
import { Task } from "../../components/Task/Task";

function Day() {
  const navigate = useNavigate();
  const { states, updaters } = useData();
  const { data: tasks, loading } = states;
  const { onGet, onCreate, onEdit, onDelete, onCreateStep } = updaters;

  return (
    <div className="day">
      <Arrange
        tasks={tasks}
        loading={loading}
        onLoading={() => <Loader />}
        onCreate={({ userId, body }) => onCreate({ userId, body })}
        render={Task}
      />

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
