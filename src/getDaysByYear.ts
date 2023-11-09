import { IResponse } from ".";
import { handleObj } from "./helpers";

const getDaysByYear = (year: number): IResponse => {
  const daysInYear = [];

  for (let month = 0; month < 12; month++) {
    for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
      const dayObject = handleObj(year, month, day);
      daysInYear.push(dayObject);
    }
  }

  return {
    year,
    total: daysInYear.length,
    result: daysInYear,
  };
};

export default getDaysByYear;
