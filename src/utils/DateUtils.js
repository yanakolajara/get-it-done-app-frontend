const getDay = (num = 0) => {
  let date = new Date();
  date.setDate(date.getDate() + num);
  return dateToObject(date);
};

const getWeek = (num = 0) => {
  const weekArr = [];
  const date = new Date();
  date.setDate(date.getDate() - num * 7);
  date.setDate(date.getDate() - date.getDay() + 1);
  while (weekArr.length < 7) {
    weekArr.push(dateToObject(date));
    date.setDate(date.getDate() + 1);
  }
  return weekArr;
};

const dateToObject = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    monthName: date.toLocaleString("default", { month: "long" }),
    day: date.getDate(),
    dayName: date.getDay(),
  };
};

export { getWeek, dateToObject, getDay };
