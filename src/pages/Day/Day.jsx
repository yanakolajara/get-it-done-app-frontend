import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { createTask, deleteStep, getTasks } from "../../api/api";
import { useAuth } from "../../hooks/useAuth";

import Loader from "../../components/Loader/Loader";
import Task from "../../components/Task/Task";
import Step from "../../components/Step/Step";
import CreateTaskForm from "./CreateTaskForm";
import Start from "../Start/Start";
import { ContainerGlass } from "../../styled-components/ContainerGlass";
import "./Day.scss";

export function Day() {
  const { date } = useParams();
  const { userId } = useAuth();
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [queries, setQueries] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks({ userId, date }).then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
    };

    fetchTasks();
  }, [date, userId]);

  if (queries.get("status") === "start") return <Start />;
  if (isLoading) return <Loader />;

  return (
    <main className="day">
      <div className="containers">
        <ContainerGlass className="manage-tasks">
          <h1>{date}</h1>
          <CreateTaskForm userId={userId} />
          {tasks.map((task) => (
            <Task key={task.id} data={task} role="static" />
          ))}
        </ContainerGlass>

        <ContainerGlass className="manage-steps">
          <h1>Staged Tasks</h1>
          <article className="manage-steps__containers">
            {tasks.map((task) => (
              <Task key={task.id} data={task} role="container">
                {(step) => console.log(step)}
              </Task>
            ))}
          </article>
        </ContainerGlass>
      </div>
    </main>
  );
}
