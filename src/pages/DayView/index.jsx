import React, { useEffect, useState } from "react";
import Order from "./Order";
import List from "./List";
import "./styles/index.scss";
import { getTasks } from "./helpers/Tasks";
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
    handleDeleteTasks,
    handleEditTask,
    handleGetTasks,
  } = useTask();

  return (
    <div className="day_view">
      <Order
        isLoading={isLoading}
        onLoading={() => <Loader />}
        onEdit={() => <OrderForm />}
      >
        {listOfTasks.map((taskObj) => (
          <OrderTask
            id={taskObj.id}
            user_id={taskObj.user_id}
            content={taskObj.content}
            progress_state={taskObj.progress_state}
            date={taskObj.date}
            previews_task_id={taskObj.previews_task_id}
            next_task_id={taskObj.next_task_id}
            onEdit={() => (
              <OrderTaskForm
                content={taskObj.content}
                user_id={taskObj.user_id}
                onEdit={() => <OrderTaskForm />}
              />
            )}
          />
        ))}
      </Order>

      <List>
        {listOfTasks.map((taskObj) => (
          <ListTask
            id={taskObj.id}
            user_id={taskObj.user_id}
            content={taskObj.content}
            progress_state={taskObj.progress_state}
            date={taskObj.date}
            previews_task_id={taskObj.previews_task_id}
            next_task_id={taskObj.next_task_id}
          />
        ))}
      </List>
    </div>
  );
}
