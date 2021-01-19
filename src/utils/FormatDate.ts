/**
 * 4の倍数を入力したらtrueを返す関数
 *
 */
export const isLeapYear = (year: number): boolean =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

/**
 * 実引数に入力した数値分の要素数を持った配列を返す関数
 * （例）dateRange(3) // Array [1, 2, 3]
 *  @param {number} end
 *  @return {number[]} Array
 */
export const dateRange = (end: number) => [...Array(end + 1).keys()].slice(1);
