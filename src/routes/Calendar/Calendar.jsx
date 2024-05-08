import React from "react";
import "./Calendar.scss";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import {
  PiArrowCircleLeftDuotone,
  PiArrowCircleRightDuotone,
} from "react-icons/pi";

function Calendar() {
  const { data } = useData();
  return (
    <main className="calendar">
      <div className="top-container">
        <PiArrowCircleLeftDuotone />
        <article className="tasks">
          {data.map((task) => (
            <Task data={task} role="calendar" />
          ))}
        </article>
        <PiArrowCircleRightDuotone />
      </div>
      <article className="week"></article>
    </main>
  );
}

export { Calendar };
