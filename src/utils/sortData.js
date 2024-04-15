const sortTaskList = async (taskList) => {
  if (!taskList.length) {
    return [];
  }
  let curr = taskList.find((task) => task.previews_task_id === null);
  if (!curr) {
    return [];
  }
  let sorted = [curr];
  while (curr.next_task_id !== null) {
    curr = taskList.find((task) => task.id === curr.next_task_id) || null;
    sorted.push(curr);
  }
  return sorted;
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

export { sortTaskList, sortSteps };
