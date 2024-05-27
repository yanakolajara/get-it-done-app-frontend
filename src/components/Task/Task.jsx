import React from 'react';
import ScrollArea from 'react-scrollbar';
import { createStep, deleteTask, getSteps } from '../../api/api';
import { dateObjToString, getDay } from '../../utils/date-utility';
import CreateStepForm from './components/CreateStepForm';
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

  const handleSubmit = async (e) => {};

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTask({
      taskId: data.id,
    });
  };

  const renderCriteria = {
    task__item: ['drag-icon', 'edit-btn'],
    task__container: ['step-contaier', 'step-counter'],
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
    <section className={role}>
      {renderCriteria[role]?.includes('drag-icon')}
      <header className='task-header'>
        <p className='task-title'>{data.content}</p>
        {renderCriteria[role]?.includes('create-step-form') && (
          <CreateStepForm />
        )}
      </header>
      {/* {renderCriteria[role]?.includes('step-contaier') && (
        <ScrollArea vertical={true} horizontal={false}>
          {steps.map()}
        </ScrollArea>
      )} */}
      <div>
        {renderCriteria[role]?.includes('edit-btn') && (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>

      {renderCriteria[role]?.includes('step-counter') && (
        <footer className='step-counter'>
          <p>{`0/${steps.length}`}</p>
        </footer>
      )}
    </section>
  );
}
