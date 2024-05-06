import React from "react";
import "./Calendar.scss";
import { Task } from "../../components/Task/Task";

function Calendar() {
  return (
    <main className="calendar">
      <article className="tasks ">
        {(data) => {
          <Task data />;
        }}
      </article>
      <article className="week"></article>
    </main>
  );
}

export { Calendar };
