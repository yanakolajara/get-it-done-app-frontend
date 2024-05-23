import React from "react";
import "./CalendarDays.scss";

function CalendarDays(props) {
  const renderFunc = props.children || props.render;
  return (
    <article className="bottom-container">
      <div className="week-container">{props.weekTarget.map(renderFunc)}</div>
    </article>
  );
}

export { CalendarDays };
