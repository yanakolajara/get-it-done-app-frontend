/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  editTask,
  createStep,
  getSteps,
} from "../api/api";
// import useAuth from "./useAuth";
import { sortTaskList } from "../utils/sortData";
import { useAuth } from "./useAuth";

function useData() {
  const { userId } = useAuth();

  const actionTypes = {
    render: "RENDER",
    error: "ERROR",
    success: "SUCCESS",
    // reset: "RESET",
  };
  const reducerObject = (state, payload) => ({
    [actionTypes.render]: { ...state, loading: false, data: payload },
    [actionTypes.success]: { ...state, loading: true },
    [actionTypes.error]: { ...state, error: payload },
  });
  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  };
  const initialState = {
    data: [],
    loading: true,
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { data, loading, error } = state;

  const onGetTask = async ({ userId }) => {
    try {
      const tasks = await getTasks(userId);
      const tasksWithSteps = await Promise.all(
        tasks.data.map(async (task) => {
          const steps = await getSteps({ taskId: task.id }).then((response) => {
            return response.data.message ? [] : response.data;
          });
          return {
            ...task,
            steps: steps,
          };
        })
      );
      dispatch({
        type: actionTypes.render,
        payload: tasksWithSteps,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };
  const onCreateTask = async ({ userId, body }) => {
    try {
      await createTask({ userId: userId, body: body }).then(() =>
        dispatch({
          type: actionTypes.success,
        })
      );
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };
  const onEditTask = async ({ taskId, body }) => {
    try {
      await editTask({ taskId: taskId, body: body }).then((response) =>
        dispatch({
          type: actionTypes.success,
        })
      );
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };
  const onDeleteTask = async ({ taskId }) => {
    try {
      await deleteTask({ taskId }).then((response) =>
        dispatch({
          type: actionTypes.success,
        })
      );
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };

  const onCreateStep = async ({ taskId, body }) => {
    try {
      await createStep({ userId: taskId, body: body }).then(() =>
        dispatch({
          type: actionTypes.success,
        })
      );
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };
  const onDeleteStep = async ({ stepId }) => {
    try {
      await deleteTask({ stepId: stepId }).then(() =>
        dispatch({
          type: actionTypes.success,
        })
      );
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };

  React.useEffect(() => {
    error &&
      console.error({ error: error.message }).then(() =>
        dispatch({
          type: actionTypes.error,
          payload: false,
        })
      );
    loading &&
      onGetTask({ userId }).then((response) => {
        console.log("data fetched: ", response);
      });

    console.log("USE EFFECT"); //TODO: Remove
  }, [loading, error]);

  const states = {
    data,
    loading,
  };

  const updaters = {
    onGetTask,
    onCreateTask,
    onEditTask,
    onDeleteTask,
    onCreateStep,
    onDeleteStep,
  };

  return {
    states,
    updaters,
  };
}

export { useData };
