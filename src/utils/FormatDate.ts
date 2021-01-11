export const isLeapYear = (year: number) =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
export const dateRange = (end: number) => [...Array(end + 1).keys()].slice(1);
