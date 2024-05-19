/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import useAuth from "./useAuth";
import { useAuth } from "./useAuth";
import {
  getTasks,
  createTask,
  deleteTask,
  editTask,
  createStep,
  getSteps,
  deleteStep,
  editStep,
  getTasksOnDate,
} from "../api/api";
import { dateObjToString, getDay } from "../utils/DateUtils";
import { useParams } from "react-router-dom";

function useTasks() {
  const { date } = useParams();
  const { userId } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const onGetTask = async (date = null) => {
    try {
      const tasks = await getTasks({ userId, date });
      const tasksWithSteps = await Promise.all(
        tasks.map(async (task) => {
          const steps = await getSteps({ taskId: task.id });
          return {
            ...task,
            steps,
          };
        })
      );
      setData(tasksWithSteps);
      setLoading(false);
    } catch (error) {
      return error;
    }
  };

  const onCreateTask = async ({ body }) => {
    try {
      await createTask({ userId, body });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };
  const onEditTask = async ({ taskId, body }) => {
    try {
      await editTask({ taskId, body });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };
  const onDeleteTask = async ({ taskId }) => {
    try {
      await deleteTask({ taskId });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };

  const onCreateStep = async ({ taskId, body }) => {
    try {
      await createStep({ taskId, body });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };

  const onEditStep = async ({ stepId, body }) => {
    try {
      await editStep({ stepId, body });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };

  const onDeleteStep = async ({ stepId }) => {
    try {
      await deleteStep({ stepId });
      setLoading(true);
    } catch (error) {
      return error;
    }
  };
  React.useEffect(() => {
    loading && onGetTask(date);
  }, [loading]);

  return {
    data,
    loading,
    onGetTask,
    // onGetTaskWithDate,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onEditStep,
    onDeleteStep,
  };
}

export { useTasks };