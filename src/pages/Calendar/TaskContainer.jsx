import React from 'react';

export default function TaskContainer({ tasks, isLoading, onLoading, render }) {
  return (
    <article className='top-container container-deep'>
      <article className='tasks-container'>
        {isLoading && onLoading()}
        {!isLoading && tasks.map(render)}
      </article>
      <button>Add Task</button>
    </article>
  );
}
