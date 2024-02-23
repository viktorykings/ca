export class RootOfNum {
    constructor(power) {
        this.power = power
        this.root
        this.prevVal
    }
    execute(currVal) {
        this.prevVal = currVal
        for (let i = 0; i <= currVal; i++) {
            if (i ** this.power === currVal) this.root = i;
        }
        return this.root
    }
    undo() {
        return this.prevVal
    }
}