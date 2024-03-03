export default class Percentage {
    constructor(valToCountPercent) {
        this.valToCountPercent = valToCountPercent
        this.percent = 100
    }

    execute(currVal) {
        if(currVal == 0) return currVal;
        console.log('fron percentage class:', 'current:', currVal, "val to count perecnt:", this.valToCountPercent, this.valToCountPercent / this.percent)
        return this.valToCountPercent / this.percent
    }
  }