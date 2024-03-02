export class RootOfNum {
    constructor(val) {
        this.val = val
        // this.root
    }
    execute(power) {
        console.log('power:', power, "val",this.val, this.root)
        let root
        for (let i = 0; i <= power; i++) {
            if (i ** power === this.val) root = i;
            console.log(i)
        }
        return root
    }
}

class Root {
    constructor(power){
        this.power = power
    }

    execute(currVal){
        let root
        console.log('power', this.power, currVal)
        for(let i = 0; i <= currVal; i++){
            if(i ** this.power === currVal) root = i
        }
        return root
    }
}

export class SquareRoot extends Root{
    constructor(power){
        super(power)
        this.power = 2
    }
}
export class CubeRoot extends Root{
    constructor(power){
        super(power)
        this.power = 3
    }
}