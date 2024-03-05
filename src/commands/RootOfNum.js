export class RootOfNum {
  constructor(val) {
    this.val = val;
  }

  execute(power) {
    if (this.val < 0) return "Error";
    return this.val ** (1 / power);
  }
}

class Root {
  constructor(power) {
    this.power = power;
  }

  execute(currVal) {
    if (currVal < 0) return "Error";
    return currVal ** (1 / this.power);
  }
}

export class SquareRoot extends Root {
  constructor(power) {
    super(power);
    this.power = 2;
  }
}
export class CubeRoot extends Root {
  constructor(power) {
    super(power);
    this.power = 3;
  }
}
