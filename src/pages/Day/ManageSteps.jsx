import React from 'react';

export default function ManageSteps({ tasks, isLoading, onLoading, children }) {
  return (
    <article className='manage-steps container-glass'>
      <h1>Staged Tasks</h1>
      <article className='manage-steps__containers'>
        {isLoading && onLoading()}
        {!isLoading && tasks.map(children)}
      </article>
    </article>
  );
}
