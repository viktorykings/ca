export class PowerOfNum {
    constructor(power) {
        this.power = power
    }
    execute(currVal) {
        console.log(this.power, currVal)
        return currVal ** this.power
    }
}

export class PowerOfTwo extends PowerOfNum {
    constructor(value, power) {
        super(power)
        this.power = 2
        this.value = value
    }
    execute() {
        return this.value ** this.power
    }

}
export class PowerOfThree extends PowerOfNum {
    constructor(value, power) {
        super(power)
        this.power = 3
        this.value = value
    }

    execute() {
        return this.value ** this.power
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