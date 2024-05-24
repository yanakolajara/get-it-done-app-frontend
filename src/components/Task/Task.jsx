import React from 'react';
import ScrollArea from 'react-scrollbar';
import { createStep, deleteTask, getSteps } from '../../api/api';
import { dateObjToString, getDay } from '../../utils/date-utility';
import './Task.scss';

export default function Task({
  data,
  // children,
  role,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [steps, setSteps] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [content, setContent] = React.useState(data.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStep({
      taskId: data.id,
      body: {
        content,
        date: dateObjToString(getDay()),
      },
    });
    setContent('');
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTask({
      taskId: data.id,
    });
  };

  React.useEffect(() => {
    const fetchSteps = async () => {
      await getSteps(data.id).then((data) => {
        setSteps(data);
        setIsLoading(false);
      });
    };
    fetchSteps();
  }, [data.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <header>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Save
        </button>
        <p>{data.content}</p>
      </header>

      <ScrollArea vertical={true} horizontal={false}>
        {/* {steps.map()} */}
      </ScrollArea>

      <footer className='step-counter'>
        <p>{`0/${steps.length}`}</p>
      </footer>

      {['static', 'calendar'].includes(role) && (
        <div>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </section>
  );
}
