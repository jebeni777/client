import React from "react";
import useRecent from "../useRecent";
import waitForExpect from "wait-for-expect";
import { render } from "@testing-library/react";

describe("useRecent tests", () => {
  let dateNow = Date.now;
  afterAll(() => {
    Date.now = dateNow;
  });

  it("Adds a recently viewed item", () => {
    Date.now = jest.spyOn(Date, "now").mockImplementation(() => 12345);
    let didRun = false;

    const runTest = async () => {
      if (didRun) {
        return;
      }
      didRun = true;
      const [recent, addRecent] = useRecent("items1");
      expect(recent).toEqual([]);
      addRecent({ title: "Broccoli", recipeUrl: "http://broccoli.com" });
      await waitForExpect(() =>
        expect(recent).toEqual([
          {
            title: "Broccoli",
            recipeUrl: "http://broccoli.com",
            time: 12345,
          },
        ])
      );
    };

    const TestComponent = () => {
      runTest();
      return null;
    };

    render(<TestComponent />);
  });

  it("Updates an existing item", () => {
    Date.now = jest
      .spyOn(Date, "now")
      .mockImplementationOnce(() => 12345)
      .mockImplementationOnce(() => 23456);

    let didRun = false;

    const runTest = async () => {
      if (didRun) {
        return;
      }
      didRun = true;
      const [recent, addRecent] = useRecent("items2");
      expect(recent).toEqual([]);
      addRecent({ title: "Broccoli", recipeUrl: "http://broccoli.com" });
      addRecent({ title: "Broccoli", recipeUrl: "http://broccoli.co.uk" });
      await waitForExpect(() =>
        expect(recent).toEqual([
          {
            title: "Broccoli",
            recipeUrl: "http://broccoli.com",
            time: 23456,
          },
        ])
      );
    };

    const TestComponent = () => {
      runTest();
      return null;
    };

    render(<TestComponent />);
  });

  it("Doesn't overwrite an existing item if new item has different title", () => {
    Date.now = jest
      .spyOn(Date, "now")
      .mockImplementationOnce(() => 12345)
      .mockImplementationOnce(() => 23456);

    let didRun = false;

    const runTest = async () => {
      if (didRun) {
        return;
      }
      didRun = true;
      const [recent, addRecent] = useRecent("items3");
      expect(recent).toEqual([]);
      addRecent({ title: "Broccoli", recipeUrl: "http://broccoli.com" });
      addRecent({ title: "Celery", recipeUrl: "http://celery.com" });
      await waitForExpect(() =>
        expect(recent).toEqual([
          {
            title: "Broccoli",
            recipeUrl: "http://broccoli.com",
            time: 12345,
          },
          {
            title: "Celery",
            recipeUrl: "http://celery.com",
            time: 23456,
          },
        ])
      );
    };

    const TestComponent = () => {
      runTest();
      return null;
    };

    render(<TestComponent />);
  });

  it("Writes independently across two separate useRecent instances if they have different keys", () => {});
});
