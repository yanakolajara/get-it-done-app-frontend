import Axios from "./axios";

const getTasks = async (userId) => {
  console.log("ghifds");
  try {
    const response = await Axios.get(`/tasks/${userId}`);
    console.log("response", response);
    console.log("res", response);
    return response.data.message ? [] : response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// const getScheduledTasks = async (userId) => {
//   try {
//     const response = await Axios.get(`/tasks/${userId}`);
//     return response.data.message ? [] : response.data;
//   } catch (error) {
//     return [];
//   }
// };

const createTask = async ({ userId, body }) => {
  try {
    const response = await Axios.post(`/tasks/${userId}`, body);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

const editTask = async ({ taskId, body }) => {
  try {
    const response = await Axios.put(`/tasks/${taskId}`, body);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

const deleteTask = async ({ taskId }) => {
  try {
    const response = await Axios.delete(`/tasks/${taskId}`);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

//* --------- childTasks ----------- *//

const getSteps = async ({ taskId }) => {
  try {
    const response = await Axios.get(`/steps/${taskId}`);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

const createStep = async ({ taskId, body }) => {
  try {
    const response = await Axios.post(`/steps/${taskId}`, body);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

const editStep = async ({ stepId, body }) => {
  try {
    const response = await Axios.put(`/steps/${stepId}`, body);
    return response.data.message ? [] : response.data;
  } catch (error) {
    return [];
  }
};

const deleteStep = async ({ stepId }) => {
  try {
    const response = await Axios.delete(`/steps/${stepId}`);
    return response.data.message ? [] : response.data;
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
