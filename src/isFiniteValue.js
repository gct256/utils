/**
 * Check if the value is a finite number.
 *
 * @param {...any} args argument.
 * @returns {boolean} result.
 */
export default function isFiniteValue(...args) {
  return args.every(x => x !== null && Number.isFinite(+x));
}
