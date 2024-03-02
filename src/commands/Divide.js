export default class Divide {
  constructor(valToDivide) {
    this.valToDivide = valToDivide;
  }

  _toFixedWithoutZeros = (num, precision = 8) => Number.parseFloat(num.toFixed(precision));

  execute(currVal) {
    if (Number.isFinite(parseFloat(currVal) / parseFloat(this.valToDivide))) {
      if (Number.isInteger(parseFloat(currVal) / parseFloat(this.valToDivide))) {
        return parseFloat(currVal) / parseFloat(this.valToDivide);
      }
      return this._toFixedWithoutZeros((parseFloat(currVal) / parseFloat(this.valToDivide)));
    }
    return "Error";
  }
}
