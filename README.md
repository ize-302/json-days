# 🗓️ json-days

A JSON data model for getting list of days in a specified year, quarter or month

## Installation

```bash
npm install json-days
```

## Usage

```js
import { getDaysByYear, getDaysByMonth, getDaysByQuarter } from "json-days";

// getDaysByYear(year)
getDaysByYear(2023);

// getDaysByMonth(year, month_index)
getDaysByMonth(2023, 0); // returns data for the month of january 2023

// getDaysByQuarter(year, 1)
getDaysByQuarter(2023, 2); // retursn data for the 2nd quarter of 2023
```

## Object structure

```js
{
  year: 2023,
  result: [
    {
        id: "day1700694000000",
        date: "2023-11-22T23:00:00.000Z",
        month_index: 10,
        year: 2023,
        day: 23,
        is_weekend: false
      },
      ...
  ]
}
```

🎉🎉🎉
