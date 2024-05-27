import React from 'react';
import { createStep } from '../../../api/api.js';
import { dateObjToString, getDay } from '../../../utils/date-utility.js';

export default function CreateStepForm(taskId) {
  const [content, setContent] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStep({
      taskId,
      body: {
        content,
        date: dateObjToString(getDay()),
      },
    });
    setContent('');
  };

  return (
    <form>
      <input
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}
