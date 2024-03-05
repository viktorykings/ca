export default class SighChange {
  constructor() {
    this.sign = -1;
  }

  execute(currVal) {
    if (currVal === 0) return currVal;
    return currVal * this.sign;
  }
}
