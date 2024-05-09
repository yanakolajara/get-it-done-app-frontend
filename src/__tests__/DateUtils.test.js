import { getWeek } from "../utils/DateUtils";

describe("utils file tests", () => {
  test("getWeek() -> return an Array", () => {
    const result = getWeek();
    const expected = Array;
    expect(result).toBeInstanceOf(expected);
  });
  test("getWeek() -> return current week", () => {
    const result = getWeek();
    const dayNumbers = result.map((date) => date.dayOfWeek);
    const expected = [1, 2, 3, 4, 5, 6, 0];
    expect(dayNumbers).toEqual(expected);
  });
  test("getWeek() -> return 2 week from current week", () => {
    let weekGap = 2;
    let weekTarget = new Date();
    weekTarget.setDate(weekTarget.getDate() + weekGap * 7);
    let firstDay = weekTarget.getDate() - 1;
    let result = getWeek(2);
    let expected = [firstDay, firstDay + 6];
    expect([result[0].day, result[6].day]).toStrictEqual(expected);
  });
});
