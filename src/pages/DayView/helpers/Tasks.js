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
    console.error(error);
  }
};

const handleCreateNewTask = async (newTaskContent) => {
  try {
    const date = new Date();
    const currDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    const newTask = await createNewTask(1, {
      details_id: null,
      content: newTaskContent,
      progress_state: "1",
      date: currDate,
    });
    console.log(newTask);
    return newTask;
  } catch (error) {
    console.error(error);
  }
};

const handleEditTask = async (task_id, data) => {
  try {
    const editedData = await editTaskWithTaskId(task_id, {
      content: data.content,
      progress_state: data.progress_state,
      date: data.date,
      previews_task_id: data.previews_task_id,
      next_task_id: data.next_task_id,
    });
    return editedData;
  } catch (error) {
    console.error(error);
  }
};

const handleDeleteTask = async (task_id) => {
  try {
    const deletedTask = await deleteTaskWithTaskId(task_id);
    return deletedTask;
  } catch (error) {
    console.error(error);
  }
};

export { getTasks, handleCreateNewTask, handleEditTask, handleDeleteTask };
