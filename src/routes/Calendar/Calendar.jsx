import React from "react";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import { CalendarDay } from "../../components/CalendarDay/CalendarDay";
import { useCalendar } from "../../hooks/useCalendar";
import "./Calendar.scss";
import { CalendarDays } from "./components/CalendarDays";
import {
  PiArrowCircleLeftDuotone,
  PiArrowCircleRightDuotone,
} from "react-icons/pi";

function Calendar() {
  const { data } = useData();
  const { today, week, updateWeek } = useCalendar();

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
      <CalendarDays
        leftArrow={<PiArrowCircleLeftDuotone />}
        rightArrow={<PiArrowCircleRightDuotone />}
        weekTarget={week}
      >
        {(data) => <CalendarDay data={data} />}
      </CalendarDays>
    </main>
  );
}

export { Calendar };
