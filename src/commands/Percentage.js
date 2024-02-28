export default class Percentage {
    constructor() {
        this.percent = 100
    }
    execute(currVal) {
        if(currVal == 0) return currVal;
        return currVal / this.percent
    }

    undo(currVal) {
        if(currVal == 0) return currVal;
        return currVal * this.percent;
    }
  }