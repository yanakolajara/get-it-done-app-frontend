import React from "react";
import { useNavigate } from "react-router-dom";
import { dateObjToString, getNameOfDay } from "../../utils/date-utility";
import { ContainerGlass } from "../../styled-components/ContainerGlass";

export default function CalendarDay({
  data: { year, month, day, dayName, monthName },
  userId,
  getTasks,
  onLoading,
  render,
}) {
  const navigate = useNavigate();
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchTasks = async () => {
      await getTasks({
        userId,
        date: dateObjToString({ year, month, day }),
      }).then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
    };
    fetchTasks();
  }, []);

  return (
    <ContainerGlass
      className="calendar-day"
      onClick={() => navigate(`/day/${dateObjToString({ year, month, day })}`)}
    >
      <header>
        <h2>{getNameOfDay(dayName)}</h2>
        <p>
          ({monthName} {day})
        </p>
      </header>
      <article>
        {isLoading && onLoading()}
        {!isLoading && tasks.map(render)}
      </article>
    </ContainerGlass>
  );
}
