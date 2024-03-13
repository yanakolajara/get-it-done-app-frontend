import React from "react";
import "./WeekView.scss";

export default function WeekView() {
  function createMainTask(e) {
    e.preventDefault();
  }
  return (
    <div className="weekView">
      <div className="week-tasks__section">
        <div className="week-tasks__container">
          <button
            className="week-task-box btn-create"
            onClick={(e) => createMainTask(e)}
          >
            Click here to add new task
          </button>
        </div>
      </div>
      <div className="week-days-section">
        <div className="week-day">
          <h2 className="week-day__name">Mon</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Tue</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Wed</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Thu</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Fri</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Sat</h2>
        </div>
        <div className="week-day">
          <h2 className="week-day__name">Sun</h2>
        </div>
      </div>
    </div>
  );
}
