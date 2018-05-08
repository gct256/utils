/**
 * Calculate the remainder like Python.
 *
 * @param {number} a dividend.
 * @param {number} b divisor. If it is 0 the result will always be NaN.
 * @returns {number} result.
 */
export default function modulo(a, b) {
  if (b === 0) return NaN;
  if (a === 0 || a === b || -a === b) return 0;
  if ((a > 0 && b > 0) || (a < 0 && b < 0)) return a % b;
  return a % b + b;
}
