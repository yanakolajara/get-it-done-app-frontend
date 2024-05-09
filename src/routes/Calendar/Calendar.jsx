import React from "react";
import { Task } from "../../components/Task/Task";
import { useData } from "../../hooks/useData";
import {
  PiArrowCircleLeftDuotone,
  PiArrowCircleRightDuotone,
} from "react-icons/pi";
// import { CalendarDay } from "../../components/CalendarDay/CalendarDay";
// import { getWeek } from "../../utils/DateUtils";
import "./Calendar.scss";
import { CalendarDays } from "./components/CalendarDays";

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
      <CalendarDays
        leftArrow={<PiArrowCircleLeftDuotone />}
        rightArrow={<PiArrowCircleRightDuotone />}
      ></CalendarDays>
    </main>
  );
}

export { Calendar };
