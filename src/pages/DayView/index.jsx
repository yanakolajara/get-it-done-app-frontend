import React, { useEffect, useState } from "react";
import Order from "./Order";
import List from "./List";
import "./styles/index.scss";
import useTask from "./hooks/useTask";
import Loader from "../../components/Loader";
import ListTask from "./ListTask";
import "./styles/List.scss";
import OrderTask from "./OrderTask";
import OrderForm from "./OrderForm";
import OrderTaskForm from "./OrderTaskForm";

export default function DayView() {
  const {
    listOfTasks,
    setListOfTasks,
    isLoading,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleGetTasks,
  } = useTask();

  return (
    <div className="day_view">
      <Order
        listOfTasks={listOfTasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
        showForm={() => (
          <OrderForm onCreate={(body) => handleCreateTask(body)} />
        )}
      >
        {(taskObj) => (
          <OrderTask
            taskObj={taskObj}
            onDelete={(task_id) => handleDeleteTask(task_id)}
          >
            <OrderTaskForm
              content={taskObj.content}
              id={taskObj.id}
              onEdit={(id, body) => handleEditTask(id, body)}
            />
          </OrderTask>
        )}
      </Order>
      <List
        listOfTasks={listOfTasks}
        isLoading={isLoading}
        onLoading={() => <Loader />}
      >
        {(taskObj) => <ListTask />}
      </List>
    </div>
  );
}
