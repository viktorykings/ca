export default class Subtraction {
  constructor(valToSubstract) {
    this.valToSubstract = valToSubstract;
  }

  execute(currVal) {
    return currVal - this.valToSubstract;
  }

  undo(currVal) {
    return currVal + this.valToSubstract;
  }
}
