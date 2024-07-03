import React from 'react';
import { createTask } from '../../api/api';

export default function CreateTaskForm({ userId, setIsLoading, date }) {
  const [content, setContent] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      content,
      date: date,
    };

    console.log(userId);

    console.log(body);
    await createTask({ userId, body });
    setContent('');
    setIsLoading(true);
  };
  return (
    <form onSubmit={handleSubmit} className='create-task-form'>
      <input
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type='submit' />
    </form>
  );
}
