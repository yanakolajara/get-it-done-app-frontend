import Axios from "./axios";

const getTasks = async (userId) => {
  try {
    return (await Axios.get(`/tasks/${userId}`)).data;
  } catch (error) {
    return [];
  }
};

const createTask = async ({ userId, body }) => {
  try {
    return (await Axios.post(`/tasks/${userId}`, body)).data;
  } catch (error) {
    return [];
  }
};

const editTask = async ({ taskId, body }) => {
  try {
    return (await Axios.put(`/tasks/${taskId}`, body)).data;
  } catch (error) {
    return [];
  }
};

const deleteTask = async ({ taskId }) => {
  try {
    return (await Axios.delete(`/tasks/${taskId}`)).data;
  } catch (error) {
    return [];
  }
};

//* --------- childTasks ----------- *//

const getSteps = async ({ taskId }) => {
  try {
    return (await Axios.get(`/steps/${taskId}`)).data;
  } catch (error) {
    return [];
  }
};

const createStep = async ({ taskId, body }) => {
  try {
    return (await Axios.post(`/steps/${taskId}`, body)).data;
  } catch (error) {
    return [];
  }
};

const editStep = async ({ stepId, body }) => {
  try {
    return (await Axios.put(`/steps/${stepId}`, body)).data;
  } catch (error) {
    return [];
  }
};

const deleteStep = async ({ stepId }) => {
  try {
    return (await Axios.delete(`/steps/${stepId}`)).data;
  } catch (error) {
    return [];
  }
};

export {
  getTasks,
  createTask,
  editTask,
  deleteTask,
  getSteps,
  createStep,
  editStep,
  deleteStep,
};
