import React from 'react';
import { getTasks } from '../../api/api';
import { useDate } from '../../hooks/useDate';
import { useAuth } from '../../hooks/useAuth';
import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';
import TaskContainer from './TaskContainer';
import Task from '../../components/Task/Task';
import Loader from '../../components/Loader/Loader';
import './Calendar.scss';
function Calendar() {
  const { userId } = useAuth();
  const { week, updateWeek } = useDate();
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const onGetTasks = async (date) => {
      await getTasks({ userId, date }).then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
    };
    onGetTasks(null);
  }, [userId]);

  return (
    <main className='calendar'>
      <TaskContainer
        tasks={tasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
        render={(data) => (
          <Task
            data={data}
            role='task__item'
            onEdit={updateWeek}
            onDelete={updateWeek}
            onToggle={updateWeek}
          />
        )}
      />
      <CalendarWeek
        week={week}
        render={(data) => (
          <CalendarDay
            key={data.date}
            userId={userId}
            data={data}
            getTasks={getTasks}
            onLoading={() => <Loader />}
            render={(data) => (
              <Task
                data={data}
                role='task__item'
                onEdit={updateWeek}
                onDelete={updateWeek}
              />
            )}
          />
        )}
      />
    </main>
  );
}

export { Calendar };
