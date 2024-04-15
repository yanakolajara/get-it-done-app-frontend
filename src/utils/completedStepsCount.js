const completedStepsCount = (taskData) => {
  return taskData.childTasks.filter((step) => step.completed).length;
};

export { completedStepsCount };
