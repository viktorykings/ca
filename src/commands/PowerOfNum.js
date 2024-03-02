export class PowerOfNum {
    constructor(power) {
        this.power = power
    }
    execute(currVal) {
        return currVal ** this.power
    }
}

export class PowerOfTwo extends PowerOfNum {
    constructor(power) {
        super(power)
        this.power = 2
    }
}
export class PowerOfThree extends PowerOfNum {
    constructor(power) {
        super(power)
        this.power = 3
    }
}
export class tenInPowerX extends PowerOfNum {
    constructor(power) {
        super(power)
        this.value = 10
    }
    execute() {
        return this.value ** this.power
    }
}