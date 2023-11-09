import { expect, test } from "bun:test";
import { daysInAQuarterCount } from "./helpers";

test("Number of days in a specified quarter matches up", () => {
  // first quarter
  // - non-leap year
  expect(daysInAQuarterCount(2023, 1)).toBe(90);
  // - leap year
  expect(daysInAQuarterCount(2020, 1)).toBe(91);

  // second quarter
  expect(daysInAQuarterCount(2005, 2)).toBe(91);

  // third quaerter
  expect(daysInAQuarterCount(2016, 3)).toBe(92);

  // fourth quaerter
  expect(daysInAQuarterCount(2018, 4)).toBe(92);
});
