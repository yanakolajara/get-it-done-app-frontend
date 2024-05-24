import React from "react";

export default function CalendarWeek({ week, render }) {
  return (
    <article className="bottom-container">
      <div className="week-container">{week.map(render)}</div>
    </article>
  );
}
