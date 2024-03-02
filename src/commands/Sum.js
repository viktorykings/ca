export default class Sum {
  constructor(valToAdd) {
    this.valToAdd = valToAdd;
  }

  execute(currVal) {
    return currVal + this.valToAdd;
  }
}
