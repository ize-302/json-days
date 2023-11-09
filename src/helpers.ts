import getDaysByMonth from "./getDaysByMonth";
import getDaysByQuarter from "./getDaysByQuarter";
import getDaysByYear from "./getDaysByYear";

export const handleObj = (year: number, month_index: number, day: number) => {
  const date = new Date(year, month_index, day);
  const id = `day${date.getTime()}`;
  const current_day = date.getDate();
  const dateStr = date;
  const month = month_index;
  const dayOfWeek = date.getDay();

  const dayObject = {
    id,
    date: dateStr,
    month_index: month,
    year,
    day: current_day,
    is_weekend: dayOfWeek === 0 || dayOfWeek === 6,
  };

  return dayObject;
};

export const daysInAYearCount = (year: number) => {
  const days = getDaysByYear(year);
  return days.result.length;
};

export const daysInAMonthCount = (year: number, month_index: number) => {
  const days = getDaysByMonth(year, month_index);
  return days.result.length;
};

export const daysInAQuarterCount = (year: number, quarter: number) => {
  const days = getDaysByQuarter(year, quarter);
  return days.result.length;
};
