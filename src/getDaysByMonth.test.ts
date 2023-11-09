import { expect, test } from "bun:test";
import { daysInAMonthCount } from "./helpers";

test("Number of days in a specified month matches up", () => {
  expect(daysInAMonthCount(2023, 4)).toBe(31); // May
  expect(daysInAMonthCount(2023, 8)).toBe(30); // sept
  // non-leap year
  expect(daysInAMonthCount(2018, 1)).toBe(28); // feb
  // leap year
  expect(daysInAMonthCount(1996, 1)).toBe(29); // feb
});
