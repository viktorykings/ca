export default class Factorial {
  constructor(factorialVal) {
    this.factorialVal = factorialVal;
  }

  execute() {
    let val = 1;
    for (let i = 1; i <= this.factorialVal; i += 1) {
      val *= i;
    }
    return val;
  }
}
