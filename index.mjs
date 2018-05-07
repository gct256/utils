import lodashToString from 'lodash.tostring';
import cliWidth from 'cli-width';

/**
 * Alias to lodash.toString.
 *
 * @param {any} arg argument.
 * @returns {string} result.
 */
function toString(arg) {
  return lodashToString(arg);
}

/**
 * Convert any values to string array.
 * If the argument is a nested array, flatten it.
 *
 * @param {...any} args arguments.
 * @returns {string[]} result.
 */
function toStringArray(...args) {
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

/**
 * Check if the value is a finite number.
 *
 * @param {...any} args argument.
 * @returns {boolean} result.
 */
function isFiniteValue(...args) {
  return args.every(x => x !== null && Number.isFinite(+x));
}

/* eslint no-console: off */

/**
 * Get simple logger object.
 *
 * @param {string} label label.
 */
function getLogger(label) {
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
    }
  };
  return logger;
}

// [todo] documentation

class FileMap {
  constructor() {
    this.map = new Map();
  }

  add(filePath, ...depFilePaths) {
    const fp = toString(filePath);
    const deps = [fp, ...toStringArray(depFilePaths)];
    deps.forEach(dep => {
      if (!this.map.has(dep)) this.map.set(dep, new Set());
      this.map.get(dep).add(fp);
    });
  }

  remove(filePath) {
    const fp = toString(filePath);
    this.map.delete(fp);
    this.map.forEach(fileSet => fileSet.delete(fp));
  }

  check(filePath) {
    const fp = toString(filePath);
    return this.map.has(fp) ? Array.from(this.map.get(fp)) : [];
  }
}

// [todo] documentation
class ObjectCache {
  constructor(defaultValue = null) {
    this.cache = {};
    this.defaultValue = defaultValue;
  }

  get(key, callback) {
    const k = JSON.stringify(key);
    if (!(k in this.cache)) {
      this.cache[k] = typeof callback === 'function' ? callback() : this.defaultValue;
    }
    return this.cache[k];
  }
}

const utils = {
  toString,
  toStringArray,
  isFiniteValue,
  getLogger,

  FileMap,
  ObjectCache
};

export default utils;
