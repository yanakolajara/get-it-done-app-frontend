export default class Task {
  constructor({
    id,
    user_id,
    details_id,
    content,
    progress_state,
    is_staged,
    date,
  }) {
    this.id = id;
    this.user_id = user_id;
    this.details_id = details_id;
    this.content = content;
    this.progress_state = progress_state;
    this.is_staged = is_staged;
    this.date = date;
  }
  autoDestruct() {
    delete this;
  }
}
