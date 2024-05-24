import React from "react";
import "./CalendarWeek.scss";

export default function CalendarWeek({ week, render }) {
  return (
    <article className="bottom-container">
      <div className="week-container">{week.map(render)}</div>
    </article>
  );
}
