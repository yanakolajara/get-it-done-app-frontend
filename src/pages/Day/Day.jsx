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

    fetchTasks();
  }, [date, userId]);

  return (
    <main className='day'>
      <ManageTasks
        tasks={tasks}
        date={date}
        isLoading={isLoading}
        createTaskForm={() => <CreateTaskForm userId={userId} />}
        onLoading={() => <Loader />}
      >
        {(data) => <Task key={data.id} data={data} role='manage-tasks' />}
      </ManageTasks>

      <ManageSteps
        tasks={tasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
      >
        {(task) => (
          <Task key={task.id} data={task} role='manage-steps'>
            {(data) => <Step data={data} role='manage-steps' />}
          </Task>
        )}
      </ManageSteps>
    </main>
  );
}
