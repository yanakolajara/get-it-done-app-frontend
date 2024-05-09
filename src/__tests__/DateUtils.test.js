import { getDay, getWeek, dateToObject } from "../utils/DateUtils";

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
  it("should return this week", () => {
    const result = getWeek();
    const dayNumbers = result.map((date) => date.dayOfWeek);
    const expected = [1, 2, 3, 4, 5, 6, 0];
    expect(dayNumbers).toEqual(expected);
  });
  it("should return 2 weeks from this week", () => {
    let weekGap = 2;
    let weekTarget = new Date();
    weekTarget.setDate(weekTarget.getDate() + weekGap * 7);
    let firstDay = weekTarget.getDate() - 1;
    let result = getWeek(2);
    let expected = [firstDay, firstDay + 6];
    expect([result[0].day, result[6].day]).toStrictEqual(expected);
  });
});
