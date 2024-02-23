export default class Factorial{
    constructor(factorialVal) {
        this.factorialVal = factorialVal;
      }
    
      execute() {
        let val = 1;
        for(let i = 1; i <= this.factorialVal; i++){
            val = val * i
        }
        return val;
      }
    
      undo() {
        return this.factorialVal;
      }
}