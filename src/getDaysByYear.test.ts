import { expect, test } from "bun:test";
import { daysInAYearCount } from "./helpers";

test("Number of days in a specified year matches up", () => {
  // leap year
  expect(daysInAYearCount(1996)).toBe(366);
  expect(daysInAYearCount(2008)).toBe(366);
  // non-leap year
  expect(daysInAYearCount(2018)).toBe(365);
  expect(daysInAYearCount(2023)).toBe(365);
});
