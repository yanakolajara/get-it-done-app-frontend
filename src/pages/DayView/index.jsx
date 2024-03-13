import React, { useEffect, useReducer, useState } from "react";
import { getTasksFromUserID } from "../../api/api";
import Task from "./Task";
import UnstagedTasks from "./UnstagedTasks";
import "./styles/index.scss";
import StagedTasks from "./StagedTasks";

export default function DayView() {
  const [arrayOfTasks, setArrayOfTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      let backendData = await getTasksFromUserID(1);
      const taskInstancesArr = backendData.data.map((task) => {
        return new Task(
          {
            id: task.id,
            user_id: task.user_id,
            details_id: task.details_id,
            content: task.content,
            progress_state: task.progress_state,
            is_staged: task.is_staged,
            date: task.date,
          },
          setArrayOfTasks,
          arrayOfTasks
        );
      });
      setArrayOfTasks(taskInstancesArr);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="day_view">
      <UnstagedTasks data={arrayOfTasks} setData={setArrayOfTasks} />
      <StagedTasks data={arrayOfTasks} />
    </div>
  );
}
