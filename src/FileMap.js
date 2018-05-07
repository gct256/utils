// [todo] documentation

import toString from './toString';
import toStringArray from './toStringArray';

export default class FileMap {
  constructor() {
    this.map = new Map();
  }

  add(filePath, ...depFilePaths) {
    const fp = toString(filePath);
    const deps = [fp, ...toStringArray(depFilePaths)];
    deps.forEach((dep) => {
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
