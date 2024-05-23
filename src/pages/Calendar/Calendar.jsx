import React from "react";
import {
  PiArrowCircleLeftDuotone,
  PiArrowCircleRightDuotone,
} from "react-icons/pi";
import { useTasks } from "../../hooks/useTasks";
import { useDate } from "../../hooks/useDate";
import { Task } from "../../components/Task/Task";
import { CalendarDay } from "../../components/CalendarDay/CalendarDay";
import { CalendarDays } from "./components/CalendarDays";
import { ContainerDeep } from "../../styled-components/ContainerDeep";
import "./Calendar.scss";

function Calendar() {
  const { data } = useTasks();
  const { today, week, updateWeek } = useDate();

  return (
    <main className="calendar">
      <ContainerDeep className="top-container">
        <article>
          {data.map((task) => (
            <Task data={task} role="calendar" />
          ))}
          <button>Add Task</button>
        </article>
      </ContainerDeep>

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
