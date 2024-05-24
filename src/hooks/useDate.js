import React from 'react';
import { getDay, getWeek } from '../utils/date-utility';
function useDate() {
  const [today] = React.useState(getDay());
  const [week, setWeek] = React.useState(getWeek());

  const updateWeek = (gap) => setWeek(getWeek(gap));

  return {
    today,
    week,
    updateWeek,
  };
}

export { useDate };
