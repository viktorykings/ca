export default class Percentage {
    constructor(valToCountPercent) {
        this.valToCountPercent = valToCountPercent
        this.percent = 100
    }

    execute(currVal) {
        console.log('percent rate',this.percent, 'koef:' , this.valToCountPercent / this.percent, 'curr val:', currVal, 'valToCountPercent', this.valToCountPercent)
        if(currVal == 0) return currVal;
        return this.valToCountPercent / this.percent
    }

    undo(currVal) {
        if(currVal == 0) return currVal;
        return this.valToCountPercent * this.percent
    }
  }