import Axios from "./axios";

const getTasks = async (userId) => {
  try {
    return await Axios.get(`/tasks/${userId}`);
  } catch (error) {
    return error.response;
  }
};

const createTask = async ({ userId, body }) => {
  try {
    return await Axios.post(`/tasks/${userId}`, body);
  } catch (error) {
    return error.response;
  }
};

const editTask = async ({ taskId, body }) => {
  try {
    return await Axios.put(`/tasks/${taskId}`, body);
  } catch (error) {
    return error.response;
  }
};

const deleteTask = async ({ taskId }) => {
  try {
    return await Axios.delete(`/tasks/${taskId}`);
  } catch (error) {
    return error.response;
  }
};

//* --------- childTasks ----------- *//

const getSteps = async ({ taskId }) => {
  try {
    return await Axios.get(`/steps/${taskId}`);
  } catch (error) {
    return error;
  }
};

const createStep = async ({ taskId, body }) => {
  try {
    console.log("body", body);
    return await Axios.post(`/steps/${taskId}`, body);
  } catch (error) {
    return error;
  }
};

const editStep = async ({ stepId, body }) => {
  try {
    return await Axios.put(`/steps/${stepId}`, body);
  } catch (error) {
    return error;
  }
};

const deleteStep = async ({ stepId }) => {
  try {
    console.log("before", stepId);
    const response = await Axios.delete(`/steps/${stepId}`);
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
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
