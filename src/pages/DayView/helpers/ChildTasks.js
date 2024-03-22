import { deleteChildTask, changeCompletionStatus } from "../../../api/api";

const handleCreateNewChildTask = async (e) => {
  e.preventDefault();
  try {
    // const response = await;
  } catch (error) {
    console.error({ message: error });
  }
};

const handleChangeCompletionStatus = async (task_id, completionStatus) => {
  try {
    const editedTask = await changeCompletionStatus(task_id, {
      isCompleted: completionStatus,
    });
    console.log(editedTask);
    return editedTask;
  } catch (error) {
    console.error({ message: error });
  }
};

const handleDeleteChildTask = async (task_id) => {
  try {
    const deletedTask = await deleteChildTask(task_id);
    return deletedTask;
  } catch (error) {
    console.error({ message: error });
  }
};

export {
  handleCreateNewChildTask,
  handleDeleteChildTask,
  handleChangeCompletionStatus,
};
