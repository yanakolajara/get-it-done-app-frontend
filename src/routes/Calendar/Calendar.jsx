import React from "react";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import {
  PiArrowCircleLeftDuotone,
  PiArrowCircleRightDuotone,
} from "react-icons/pi";
import { CalendarDay } from "../../components/CalendarDay/CalendarDay";
import { getWeek } from "../../utils/DateUtils";
import "./Calendar.scss";

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
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
        </article>
        <PiArrowCircleRightDuotone />
      </div>
    </main>
  );
}

export { Calendar };
