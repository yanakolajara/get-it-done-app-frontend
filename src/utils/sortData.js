const sortTasks = async (data) => {
  if (!data.length) {
    return [];
  }
  let currentTask = data.find((task) => task.previews_task_id === null);
  let sortedTasks = [];
  while (currentTask.next_task_id !== null) {
    sortedTasks.push(currentTask);
    currentTask =
      data.find((task) => task.id === currentTask.next_task_id) || null;
  }
  return sortedTasks;
};

const sortSteps = async (listOfSteps) => {
  if (!listOfSteps.length) {
    return [];
  }
  let curr = listOfSteps.find((task) => task.previews_task_id === null);
  if (!curr) {
    console.log("HEREEEE");
    return [];
  }
  let sorted = [curr];
  while (curr.next_task_id !== null) {
    curr = listOfSteps.find((task) => task.id === curr.next_task_id) || null;
    sorted.push(curr);
  }
  return sorted;
};

export { sortTasks, sortSteps };
