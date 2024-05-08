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
      <div className="bottom-container">
        <PiArrowCircleLeftDuotone />
        <article className="week">
          <p>mon</p>
          <p>tue</p>
          <p>wed</p>
          <p>thu</p>
          <p>fri</p>
          <p>sat</p>
          <p>sun</p>
        </article>
        <PiArrowCircleRightDuotone />
      </div>
    </main>
  );
}

export { Calendar };
