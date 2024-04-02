import useTask from "../useTask";

const {
  listOfTasks,
  setListOfTasks,
  isLoading,
  handleCreateTask,
  handleDeleteTasks,
  handleEditTask,
  handleGetTasks,
} = useTask;

describe("Testsuit for useTask hook functions", () => {
  test("listOfTasks returns an array with tasks", () => {
    const firstTask = { user_id: 1 };
    expect(firstTask).toHaveProperty("user_id");
  });
});
