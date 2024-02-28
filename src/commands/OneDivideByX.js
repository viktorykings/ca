export default class OneDivideByX {
    constructor(valToDivideBy) {
      this.valToDivide = 1;
      this.valToDivideBy = valToDivideBy
    }
  
    execute() {
      return this.valToDivide / this.valToDivideBy;
    }
  
    undo() {
      return this.valToDivide * this.valToDivideBy;
    }
  }