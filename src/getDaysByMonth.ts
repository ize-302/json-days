import { IResponse } from ".";
import { handleObj } from "./helpers";

const getDaysByMonth = (year: number, month_index: number): IResponse => {
  if (month_index < 0 || month_index > 11) {
    throw new Error(
      "Invalid month index. Month index should be between 0 and 11."
    );
  }

  const daysInMonth = [];
  const daysInMonthCount = new Date(year, month_index + 1, 0).getDate();

  for (let day = 1; day <= daysInMonthCount; day++) {
    const dayObject = handleObj(year, month_index, day);
    daysInMonth.push(dayObject);
  }

  return {
    year,
    month_index,
    total: daysInMonth.length,
    result: daysInMonth,
  };
};

export default getDaysByMonth;
