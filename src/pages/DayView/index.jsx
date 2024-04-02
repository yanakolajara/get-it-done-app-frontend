import React, { useEffect, useState } from "react";
import Order from "./Order";
import List from "./List";
import "./styles/index.scss";
import { getTasks } from "./helpers/Tasks";
import useTask from "./hooks/useTask";
import Loader from "../../components/Loader";
import ListTask from "./ListTask";

export default function DayView() {
  const {
    listOfTasks,
    setListOfTasks,
    isLoading,
    handleCreateTask,
    handleDeleteTasks,
    handleEditTask,
    handleGetTasks,
  } = useTask();
  // const [arrayOfTasks, setArrayOfTasks] = useState([]);
  // const [serverError, setServerError] = useState(false);

  // TODO: start using useTask custom hook to manipulate data

  // const fetchData = async () => {
  //   try {
  //     const tasksResponse = await getTasks();
  //     setArrayOfTasks(!!tasksResponse.data ? tasksResponse.data : []);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("error");
  //   }
  // };

  return (
    <div className="day_view">
      <Order
        props={
          {
            // arrayOfTasks,
            // fetchData
          }
        }
      >
        {isLoading && <Loader />}
        {!isLoading && console.log("isLoading is false")}
        {listOfTasks.map((taskObj) => (
          <ListTask props={{ taskObj }} />
        ))}
      </Order>
      <List
        props={
          {
            //  arrayOfTasks,
            // fetchData
          }
        }
      />
    </div>
  );
}
