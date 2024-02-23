export default class Divide {
  constructor(valToDivide) {
    this.valToDivide = valToDivide;
  }

  execute(currVal) {
    return currVal / this.valToDivide;
  }

  undo(currVal) {
    return currVal * this.valToDivide;
  }
}
