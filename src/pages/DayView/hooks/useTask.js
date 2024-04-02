import React, { useEffect, useState } from "react";
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
    handleGetTasks();
    console.log("rendered from useTask hook");
  }, []);

  const handleCreateTask = async (body) => {
    try {
      const response = await createNewTask(userId, body);
      setListOfTasks(listOfTasks, ...response);
    } catch (error) {
      return error.data;
    }
  };

  const handleGetTasks = async () => {
    try {
      const response = await getTasksFromUserID(userId);
      setListOfTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      return error.data;
    }
  };

  const handleEditTask = async (task_id, body) => {
    try {
      const response = await editTaskWithTaskId(task_id, body);
      setListOfTasks(listOfTasks, ...response);
    } catch (error) {
      return error.data;
    }
  };

  const handleDeleteTasks = async (task_id) => {
    try {
      const response = deleteTaskWithTaskId(task_id);
      setListOfTasks(listOfTasks, ...response);
    } catch (error) {
      return error.data;
    }
  };

  return {
    listOfTasks,
    setListOfTasks,
    isLoading,
    handleCreateTask,
    handleDeleteTasks,
    handleEditTask,
    handleGetTasks,
  };
}

export default useTask;
