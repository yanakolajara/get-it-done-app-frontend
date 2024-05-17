import React from "react";
import "./CalendarDay.scss";
import { getNameOfDay } from "../../utils/DateUtils";
import { useNavigate } from "react-router-dom";
import { PiDropSimpleThin } from "react-icons/pi";

function CalendarDay(props) {
  const navigate = useNavigate();
  const { data } = props;
  const { year, month, monthName, dayName, day } = data;

  return (
    <section
      className="calendar-day"
      onClick={(e) =>
        navigate(`/day/${year}-${month}-${day}`, { state: { date: data } })
      }
    >
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
