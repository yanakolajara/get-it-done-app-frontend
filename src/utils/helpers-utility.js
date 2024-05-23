const countCompletedSteps = (steps) => {
  return steps.filter((step) => step.completed).length;
};

const sortList = (list, key) => {};

export { countCompletedSteps, sortList };
