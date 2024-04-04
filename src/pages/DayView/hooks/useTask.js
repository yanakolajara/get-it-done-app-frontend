import { useEffect, useState } from "react";
import {
  createNewTask,
  deleteTaskWithTaskId,
  editTaskWithTaskId,
  getTasksFromUserID,
} from "../../../api/api";
import useAuth from "../../../hooks/useAuth";

function useTask() {
  const { userId } = useAuth();
  const [listOfTasks, setListOfTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("rendered from useTask hook");
    isLoading && handleGetTasks().then(console.log("Fetched executed"));
  }, [isLoading]);

  const handleCreateTask = async (body) => {
    try {
      await createNewTask(userId, body);
      setIsLoading(true);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleGetTasks = async () => {
    try {
      const response = await getTasksFromUserID(userId);
      setListOfTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleEditTask = async (task_id, body) => {
    try {
      await editTaskWithTaskId(task_id, body);
      setIsLoading(true);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  const handleDeleteTask = async (task_id) => {
    try {
      await deleteTaskWithTaskId(task_id);
      setIsLoading(true);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return {
    listOfTasks,
    setListOfTasks,
    isLoading,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleGetTasks,
  };
}

export default useTask;
