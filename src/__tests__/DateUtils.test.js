import {
  getDay,
  getWeek,
  dateToObject,
  dateObjToString,
} from "../utils/DateUtils";

describe("Testing dateToObject()", () => {});
describe("Testing dateObjToString()", () => {
  it("should return a string", () => {
    const dateObj = {
      year: 2003,
      month: 5,
      day: 20,
    };
    const result = dateObjToString(dateObj);
    const expected = "2003-05-20";
    expect(result).toEqual(expected);
  });
});

describe("Testing getDay()", () => {
  it("should return an Object", () => {
    const result = getDay();
    const expected = Object;
    expect(result).toBeInstanceOf(expected);
  });
  it("should return today", () => {
    const date = new Date();
    const result = getDay(0);
    const expected = date.getDate();
    expect(result.day).toEqual(expected);
  });
  it("should return 8 days from today", () => {
    const date = new Date();
    date.setDate(date.getDate() + 8);
    const result = getDay(8);
    const expected = date.getDate();
    expect(result.day).toEqual(expected);
  });
});

describe("Testing getWeek()", () => {
  it("should return an Object", () => {
    const result = getDay();
    const expected = Object;
    expect(result).toBeInstanceOf(expected);
  });
  it("should return a week from monday to sunday", () => {
    const result = getWeek();
    const dayNumbers = result.map((date) => date.dayName);
    const expected = [1, 2, 3, 4, 5, 6, 0];
    expect(dayNumbers).toEqual(expected);
  });
  it("should return this week", () => {
    let weekTarget = new Date();
    weekTarget.setDate(weekTarget.getDate() - weekTarget.getDay() + 1);
    let result = getWeek();
    let expected = [weekTarget.getDate(), weekTarget.getDate() + 6];
    expect([result[0].day, result[6].day]).toStrictEqual(expected);
  });
});

describe("Testing NameOfDay()", () => {
  it("should return a String", () => {
    const result = getWeek();
    const dayNumbers = result.map((date) => date.dayName);
    const expected = [1, 2, 3, 4, 5, 6, 0];
    expect(dayNumbers).toEqual(expected);
  });
  // it("should return the string 'Monday'", () => {
  //   const result = getDay();
  //   const expected = Object;
  //   expect(result).toBeInstanceOf(expected);
  // });
});
