export class PowerOfNum {
    constructor(power) {
        this.power = power
        this.prevVal
    }
    execute(currVal) {
        this.prevVal = currVal
        return currVal ** this.power
    }
    undo() {
        return this.prevVal
    }
}

export class tenInPowerX extends PowerOfNum {
    constructor(power, prevVal) {
        super(power, prevVal)
        this.value = 10
    }
    execute() {
        this.prevVal = this.value
        return this.value ** this.power
    }
    undo() {
        return this.prevVal
    }
}