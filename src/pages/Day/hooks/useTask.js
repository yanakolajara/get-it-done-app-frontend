/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  changeCompletionStatus,
  createChildTask,
  createNewTask,
  deleteChildTask,
  deleteTaskWithTaskId,
  editTaskWithTaskId,
  getChildTaskFromTaskId,
  getTasksFromUserID,
} from "../../../api/api";
import useAuth from "../../../hooks/useAuth";
import sortTaskList from "../../../utils/sortTaskList";

function useTask() {
  const { userId } = useAuth();
  const [listOfTasks, setListOfTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [onStart, setOnStart] = useState(false);

  useEffect(() => {
    !processing &&
      handleGetTasks()
        .then(setIsLoading(false))
        .then(console.log("Fetched executed"));
  }, [processing]);

  useEffect(() => {
    console.log("List of tasks:", listOfTasks);
  }, [listOfTasks]);

  const handleCreateTask = async (body) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await createNewTask(userId, body);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleGetTasks = async () => {
    try {
      setIsLoading(true);
      await getTasksFromUserID(userId)
        .then((response) => (response.data.error ? [] : response.data))
        .then(async (response) => {
          let tasksWithchildTasksPromises = response.map(async (task) => {
            const childTasks = await getChildTaskFromTaskId(task.id);
            return {
              ...task,
              childTasks: childTasks.data.message ? [] : childTasks.data,
            };
          });
          let tasksWithchildTasks = await Promise.all(
            tasksWithchildTasksPromises
          );
          return tasksWithchildTasks;
        })
        .then((response) => {
          console.log("ORIGINAL: ", response);
          console.log("MODIFIED: ", sortTaskList(response));
          return sortTaskList(response);
        })
        .then((response) => setListOfTasks(response));
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleEditTask = async (task_id, body) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await editTaskWithTaskId(task_id, body);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleDeleteTask = async (task_id) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await deleteTaskWithTaskId(task_id);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleAddStep = async (task_id, body) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await createChildTask(task_id, body);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleDeleteStep = async (step_id) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await deleteChildTask(step_id);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleCompleteStep = async (step_id, body) => {
    try {
      setProcessing(true);
      setIsLoading(true);
      await changeCompletionStatus(step_id, body);
      setProcessing(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return {
    listOfTasks,
    isLoading,
    onStart,
    setOnStart,
    setListOfTasks,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleGetTasks,
    handleAddStep,
    handleDeleteStep,
    handleCompleteStep,
  };
}

export default useTask;
