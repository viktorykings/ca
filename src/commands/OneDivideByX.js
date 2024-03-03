import Divide from "./Divide";
export default class OneDivideByX extends Divide {
    constructor(valToDivideBy, valToDivide) {
      super(valToDivide)
      this.valToDivide = 1;
      this.valToDivideBy = valToDivideBy
    }
  
    execute() {
      if (Number.isFinite(parseFloat(this.valToDivide) / parseFloat(this.valToDivideBy))) {
        if (Number.isInteger(parseFloat(this.valToDivide) / parseFloat(this.valToDivideBy))) {
          return parseFloat(this.valToDivide) / parseFloat(this.valToDivideBy);
        }
        return this._toFixedWithoutZeros((parseFloat(this.valToDivide) / parseFloat(this.valToDivideBy)));
      }
      return "Error";
    }
  }