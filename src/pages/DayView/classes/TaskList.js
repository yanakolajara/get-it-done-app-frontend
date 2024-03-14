import Task from "./Task";

class TaskList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  get() {
    return this.size;
  }

  push(taskObj) {
    const newTask = new Task(taskObj);
    if (this.top) {
      this.top.next(newTask);
    }
    newTask.prev = this.top;
    this.top = newTask;
    return this;
  }
}
