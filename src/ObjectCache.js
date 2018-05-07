// [todo] documentation
export default class ObjectCache {
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
