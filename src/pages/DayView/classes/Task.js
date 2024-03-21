export default class Task {
  constructor({
    id,
    user_id,
    preview_task_id,
    next_task_id,
    content,
    progress_state,
    date,
  }) {
    this.id = id;
    this.user_id = user_id;
    this.prev = preview_task_id;
    this.next = next_task_id;
    this.content = content;
    this.progress_state = progress_state;
    this.date = date;
  }
}
