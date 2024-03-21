import React, { useEffect, useState } from "react";
import Order from "./Order";
import List from "./List";
import "./styles/index.scss";
import { getTasks } from "./helpers/Tasks";

export default function DayView() {
  const [arrayOfTasks, setArrayOfTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log("FETCHED!");
      const tasksResponse = await getTasks();
      setArrayOfTasks(!!tasksResponse.data ? tasksResponse.data : []);
      setIsLoading(false);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="day_view">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Order props={{ arrayOfTasks, fetchData }} />
          <List props={{ arrayOfTasks, fetchData }} />
        </>
      )}
    </div>
  );
}
