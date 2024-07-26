export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    this._code = cd;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = this.name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
