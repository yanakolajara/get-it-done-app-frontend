import React from "react";
import "./CalendarDay.scss";

function CalendarDay(props) {
  const { data } = props;
  return (
    <section className="calendar-day">
      <p>{data.dayName}</p>
      <p>
        {data.monthName} {data.day}
      </p>
      <div>
        <p className="task4"></p>
        <p className="task5"></p>
        <p className="task6"></p>
        <p className="task7"></p>
      </div>
    </section>
  );
}

export { CalendarDay };
