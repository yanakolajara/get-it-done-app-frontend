import React from 'react';

export default function ManageTasks({
  date,
  tasks,
  isLoading,
  onLoading,
  createTaskForm,
  children,
}) {
  return (
    <article className='manage-tasks container-glass'>
      <h1>{date}</h1>
      {createTaskForm()}
      {isLoading && onLoading()}
      {!isLoading && tasks.map(children)}
    </article>
  );
}
