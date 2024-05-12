import React from "react";
import "./CalendarDay.scss";
import { getNameOfDay } from "../../utils/DateUtils";

function CalendarDay(props) {
  const { data } = props;
  const { monthName, dayName, day } = data;
  return (
    <section className="calendar-day">
      <header>
        <h2>{getNameOfDay(dayName)}</h2>
        <p>
          ({monthName} {day})
        </p>
      </header>
    </section>
  );
}

export { CalendarDay };
