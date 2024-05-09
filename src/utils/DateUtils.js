const getWeek = (num = 0) => {
  const weekArr = [];
  const date = new Date();
  date.setDate(date.getDate() - num * 7);
  date.setDate(date.getDate() - date.getDay() + 1);
  while (weekArr.length < 7) {
    weekArr.push({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      dayOfWeek: date.getDay(),
    });
    date.setDate(date.getDate() + 1);
  }
  return weekArr;
};

export { getWeek };
