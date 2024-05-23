import { sortTasks, sortSteps } from "../utils/sortData";

jest.mock("axios");

describe("Tests for sorts utils", () => {
  test("sortTasks() should return an array", () => {
    const data = [
      {
        id: 27,
        user_id: 1,
        content: "This is fourth",
        completed: false,
        date: null,
        previews_task_id: 26,
        next_task_id: 28,
      },
      {
        id: 26,
        user_id: 1,
        content: "This is third task 3",
        completed: false,
        date: null,
        previews_task_id: 1,
        next_task_id: 27,
      },
      {
        id: 1,
        user_id: 1,
        content: "Clean my desk",
        completed: false,
        date: "2024-04-06",
        previews_task_id: 2,
        next_task_id: 26,
      },
      {
        id: 28,
        user_id: 1,
        content: "This is 5",
        completed: false,
        date: null,
        previews_task_id: 27,
        next_task_id: null,
      },
      {
        id: 2,
        user_id: 1,
        content: "Organize closet",
        completed: false,
        date: "2024-04-06",
        previews_task_id: null,
        next_task_id: 1,
      },
    ];
    const result = [
      {
        id: 2,
        user_id: 1,
        content: "Organize closet",
        completed: false,
        date: "2024-04-06",
        previews_task_id: null,
        next_task_id: 1,
      },
      {
        id: 1,
        user_id: 1,
        content: "Clean my desk",
        completed: false,
        date: "2024-04-06",
        previews_task_id: 2,
        next_task_id: 26,
      },
      {
        id: 26,
        user_id: 1,
        content: "This is third task 3",
        completed: false,
        date: null,
        previews_task_id: 1,
        next_task_id: 27,
      },
      {
        id: 27,
        user_id: 1,
        content: "This is fourth",
        completed: false,
        date: null,
        previews_task_id: 26,
        next_task_id: 28,
      },
      {
        id: 28,
        user_id: 1,
        content: "This is 5",
        completed: false,
        date: null,
        previews_task_id: 27,
        next_task_id: null,
      },
    ];
    return sortTasks(data).then((res) => {
      expect(res).toBeInstanceOf(Array);
    });
  });
  //   it("should sort steps", () => {});
});
