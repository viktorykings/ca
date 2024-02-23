class PowerOfNum{
    constructor(power){
        this.power = power
    }
    execute(currVal){
        return currVal ** this.power
    }
    undo(){}
}

export class Square extends PowerOfNum{
    undo(currVal){
        for (let i = 0; i <= currVal; i++) {
            if (i * i === currVal) return i;
          }
    }
}
export class Cube extends PowerOfNum{
    undo(currVal){
        for (let i = 0; i <= currVal; i++) {
            if (i * i * i === currVal) return i;
          }
    }
}