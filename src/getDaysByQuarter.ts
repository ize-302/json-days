import { IResponse } from ".";
import { handleObj } from "./helpers";

const getDaysByQuarter = (year: number, quarter: number): IResponse => {
  if (quarter < 1 || quarter > 4) {
    throw new Error("Invalid quarter. Quarter should be between 1 and 4.");
  }
  const daysInQuarter = [];
  const startMonth = (quarter - 1) * 3;

  for (let month = startMonth; month < startMonth + 3; month++) {
    for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
      const dayObject = handleObj(year, month, day);
      daysInQuarter.push(dayObject);
    }
  }
  return {
    year,
    quarter,
    total: daysInQuarter.length,
    result: daysInQuarter,
  };
};

export default getDaysByQuarter;
