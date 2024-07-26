export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
      this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(size) {
    if (!Number.isInteger(size)) {
      throw new TypeError('Length must be a number');
    }
    this._length = size;
  }

  get students() {
    return this._students;
  }

  set students(stds) {
    if (!Array.isArray(stds)) {
      throw new TypeError('must be an array');
    }
    this._students = stds;
  }
}
