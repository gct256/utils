import toString from './toString';

/**
 * Convert any values to string array.
 * If the argument is a nested array, flatten it.
 *
 * @param {...any} args arguments.
 * @returns {string[]} result.
 */
export default function toStringArray(...args) {
  const result = [];
  const l = args.length;
  for (let i = 0; i < l; i += 1) {
    const arg = args[i];
    if (Array.isArray(arg)) {
      result.push(...toStringArray(...arg));
    } else {
      result.push(toString(arg));
    }
  }
  return result;
}
