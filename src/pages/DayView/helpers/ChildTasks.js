import { deleteChildTask } from "../../../api/api";

const handleCreateNewChildTask = async (e) => {
  e.preventDefault();
  try {
    // const response = await;
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

export { handleCreateNewChildTask, handleDeleteChildTask };
