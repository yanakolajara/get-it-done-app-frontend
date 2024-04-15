const completedStepsCount = (taskObj) => {
  return taskObj.childTasks.filter((step) => step.completed).length;
};

export { completedStepsCount };
