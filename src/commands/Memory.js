
export class Memory {
    constructor(value) {
        this.value = value
    }

    execute() { }
}
export class MemoryClear extends Memory {
    execute() {
        console.log('memory', this.value)
        this.value = 0
        return this.value
    }
}
export class MemoryAdd extends Memory {

    execute(val) {
        console.log('memory in memory class', this.value, val)

        return this.value + val
    }
}
export class MemorySubstract extends Memory {
    execute(val) {
        console.log('memory minus', this.value, val)
        return val - this.value
    }
}

export class MemoryRecall extends Memory {
    constructor(value){
        super(value)
        this.value = value
    }
    execute() {
        console.log('memory recall:', this.value)
        return this.value
    }
}