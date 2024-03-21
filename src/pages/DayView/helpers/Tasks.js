import {
  createNewTask,
  deleteTaskWithTaskId,
  editTaskWithTaskId,
  getTasksFromUserID,
} from "../../../api/api";

const getTasks = async () => {
  try {
    let backendData = await getTasksFromUserID(1);
    return backendData;
  } catch (error) {
    console.error({ message: error });
  }
};

const handleCreateNewTask = async (newTaskContent) => {
  try {
    const date = new Date();
    const currDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    const newTask = await createNewTask(1, {
      content: newTaskContent,
      date: currDate,
    });
    return newTask;
  } catch (error) {
    console.error({ message: error });
  }
};

const handleEditTask = async (task_id, data) => {
  try {
    const editedData = await editTaskWithTaskId(task_id, {
      content: data.content,
      progress_state: data.progress_state,
      date: data.date,
    });
    return editedData;
  } catch (error) {
    console.error({ message: error });
  }
};

const handleDeleteTask = async (task_id) => {
  try {
    const deletedTask = await deleteTaskWithTaskId(task_id);
    return deletedTask;
  } catch (error) {
    console.error({ message: error });
  }
};

export { getTasks, handleCreateNewTask, handleEditTask, handleDeleteTask };
