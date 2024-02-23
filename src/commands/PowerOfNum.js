export class PowerOfNum{
    constructor(power){
        this.power = power
        this.prevVal
    }
    execute(currVal){
        this.prevVal = currVal
        return currVal ** this.power
    }
    undo(){
        return this.prevVal
    }
}