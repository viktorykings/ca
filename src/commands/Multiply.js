export default class Multiply {
  constructor(valToMult) {
    this.valToMult = valToMult;
  }

  execute(currVal) {
    return currVal * this.valToMult;
  }

  undo(currVal) {
    return currVal / this.valToMult;
  }
}
