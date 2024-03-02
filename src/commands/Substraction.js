export default class Substraction {
  constructor(valToSubstract) {
    this.valToSubstract = valToSubstract;
  }

  execute(currVal) {
    return currVal - this.valToSubstract;
  }
}
