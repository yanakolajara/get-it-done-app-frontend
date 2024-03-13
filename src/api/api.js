import Axios from "./axios";

const getTasksFromUserID = async (user_id) => {
  try {
    const tasksArr = await Axios.get(`/tasks/${user_id}`);
    return tasksArr;
  } catch (error) {
    return error;
  }
};

const createNewTask = async (user_id, body) => {
  try {
    const tasksArr = await Axios.post(`/tasks/${user_id}`, body);
    return tasksArr;
  } catch (error) {
    return error;
  }
};

const editTaskWithTaskId = async (task_id, body) => {
  try {
    const tasksArr = await Axios.put(`/tasks/${task_id}`, body);
    return tasksArr;
  } catch (error) {
    return error;
  }
};

const deleteTaskWithTaskId = async (task_id) => {
  try {
    const tasksArr = await Axios.delete(`/tasks/${task_id}`);
    return tasksArr;
  } catch (error) {
    return error;
  }
};

export {
  getTasksFromUserID,
  createNewTask,
  editTaskWithTaskId,
  deleteTaskWithTaskId,
};
