import lodashToString from 'lodash.tostring';

/**
 * Alias to lodash.toString.
 *
 * @param {any} arg argument.
 * @returns {string} result.
 */
export default function toString(arg) {
  return lodashToString(arg);
}
