const dateToObject = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    monthName: date.toLocaleString("default", { month: "long" }),
    day: date.getDate(),
    dayName: date.getDay(),
  };
};

const getDay = (gap = 0) => {
  let date = new Date();
  date.setDate(date.getDate() + gap);
  return dateToObject(date);
};

const getWeek = (gap = 0) => {
  const weekArr = [];
  const date = new Date();
  date.setDate(date.getDate() - gap * 7);
  date.setDate(date.getDate() - date.getDay() + 1);
  while (weekArr.length < 7) {
    weekArr.push(dateToObject(date));
    date.setDate(date.getDate() + 1);
  }
  console.log(weekArr);
  return weekArr;
};

const getNameOfDay = (dayNumber) => {
  const dayNames = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return dayNames[dayNumber];
};

export { getWeek, dateToObject, getDay, getNameOfDay };
