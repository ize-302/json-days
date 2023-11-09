import getDaysByQuarter from "./getDaysByQuarter";
import getDaysByMonth from "./getDaysByMonth";
import getDaysByYear from "./getDaysByYear";

interface IDay {
  id: string;
  date: Date;
  month_index: number;
  year: number;
  day: number;
  is_weekend: boolean;
}

interface IResponse {
  year: number;
  total: number;
  result: IDay[];
  month_index?: number;
  quarter?: number;
}

export { getDaysByQuarter, getDaysByMonth, getDaysByYear, IDay, IResponse };
