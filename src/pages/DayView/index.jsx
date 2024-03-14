import React, { useEffect, useState } from "react";
import Order from "./Order";
import List from "./List";
import "./styles/index.scss";
import { getTasks } from "./helpers/Tasks";

export default function DayView() {
  const [arrayOfTasks, setArrayOfTasks] = useState([]);

  const fetchData = async () => {
    const tasksResponse = await getTasks();
    setArrayOfTasks(tasksResponse.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="day_view">
      {!arrayOfTasks[0] ? (
        <p>Loading...</p>
      ) : (
        <>
          <Order props={{ arrayOfTasks, fetchData }} />
          <List data={arrayOfTasks} fetch={fetchData} />
        </>
      )}
    </div>
  );
}
