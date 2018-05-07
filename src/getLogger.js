/* eslint no-console: off */

import cliWidth from 'cli-width';
import toString from './toString';

/**
 * Get simple logger object.
 *
 * @param {string} label label.
 */
export default function getLogger(label) {
  const s = `[${toString(label)}]`;
  const logger = {
    separator(character = '-') {
      const w = cliWidth();
      console.log('');
      console.log(`${s} ${toString(character).repeat(w)}`.slice(0, w));
      console.log('');
    },

    log(...values) {
      console.log(s, ...values);
    },

    debug(...values) {
      console.debug(s, ...values);
    },

    info(...values) {
      console.info(s, ...values);
    },

    warn(...values) {
      console.warn(s, ...values);
    },

    error(...values) {
      logger.separator();
      console.error(...values);
      logger.separator();
    },
  };
  return logger;
}
