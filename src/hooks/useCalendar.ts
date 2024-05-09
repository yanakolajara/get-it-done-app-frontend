import React from "react";
import { getDay, getWeek, dateToObject } from "../utils/DateUtils";
function useCalendar() {
  const [today, setToday] = React.useState(getDay());
  const [week, setWeek] = React.useState(getWeek());

  const updateWeek = (gap: number) => setWeek(getWeek(gap));

  return {
    today,
    week,
    updateWeek,
  };
}

export { useCalendar };
