import React from 'react';
import { createTask } from '../../api/api';
import { dateObjToString, getDay } from '../../utils/date-utility';

export default function CreateTaskForm({ userId }) {
  const [content, setContent] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      content,
      date: dateObjToString(getDay()),
    };
    await createTask({ userId, body });
    setContent('');
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
