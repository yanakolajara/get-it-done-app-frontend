import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTasks } from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import ManageTasks from './ManageTasks';
import ManageSteps from './ManageSteps';
import CreateTaskForm from './CreateTaskForm';
import Task from '../../components/Task/Task';
import Step from '../../components/Step/Step';
import Loader from '../../components/Loader/Loader';
import './Day.scss';

export function Day() {
  const { date } = useParams();
  const { userId } = useAuth();
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks({ userId, date }).then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
    };

    isLoading && fetchTasks();
  }, [date, userId, isLoading]);

  console.log(`hi`);
  return (
    <main className='day'>
      <ManageTasks
        tasks={tasks}
        date={date}
        isLoading={isLoading}
        createTaskForm={() => (
          <CreateTaskForm
            userId={userId}
            setIsLoading={setIsLoading}
            date={date}
          />
        )}
        onLoading={() => <Loader />}
      >
        {(data) => <Task key={data.id} data={data} role='task__item' />}
      </ManageTasks>

      <ManageSteps
        tasks={tasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
      >
        {(task) => (
          <Task key={task.id} data={task} role='task__container'>
            {(data) => <Step data={data} role='step__manage-steps' />}
          </Task>
        )}
      </ManageSteps>
    </main>
  );
}
