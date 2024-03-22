import Axios from "./axios";

const getTasksFromUserID = async (user_id) => {
  try {
    const response = await Axios.get(`/tasks/${user_id}`);
    return response;
  } catch (error) {
    return error;
  }
};

const createNewTask = async (user_id, body) => {
  try {
    const response = await Axios.post(`/tasks/${user_id}`, body);
    return response;
  } catch (error) {
    return error;
  }
};

const editTaskWithTaskId = async (task_id, body) => {
  try {
    const response = await Axios.put(`/tasks/${task_id}`, body);
    return response;
  } catch (error) {
    return error;
  }
};

const deleteTaskWithTaskId = async (task_id) => {
  try {
    const response = await Axios.delete(`/tasks/${task_id}`);
    return response;
  } catch (error) {
    return error;
  }
};

//* --------- childTasks ----------- *//

const getChildTaskFromTaskId = async (task_id) => {
  try {
    const response = await Axios.get(`/childTasks/${task_id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const createChildTask = async (task_id, body) => {
  try {
    const response = await Axios.post(`/childTasks/${task_id}`, body);
    return response;
  } catch (error) {
    return error;
  }
};
const changeCompletionStatus = async (task_id, body) => {
  try {
    const response = await Axios.put(
      `/childTasks/completionStatus/${task_id}`,
      body
    );
    return response;
  } catch (error) {
    return error;
  }
};

const deleteChildTask = async (task_id) => {
  try {
    const response = await Axios.delete(`childTasks/${task_id}`);
    return response;
  } catch (error) {}
};

export {
  getTasksFromUserID,
  createNewTask,
  editTaskWithTaskId,
  deleteTaskWithTaskId,
  getChildTaskFromTaskId,
  createChildTask,
  deleteChildTask,
  changeCompletionStatus,
};
