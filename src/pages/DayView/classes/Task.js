export default class Task {
  constructor({ id, user_id, content, progress_state, date }) {
    this.id = id;
    this.user_id = user_id;
    this.content = content;
    this.progress_state = progress_state;
    this.date = date;
    this.prev = null;
    this.next = null;
  }
}
