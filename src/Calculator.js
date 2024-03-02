export default class Calculator {
    constructor() {
        this.val = 0;
        this.memory = 0;
        this.history = []
    }
    setValue(num){
        this.val = num
    }

    setMemoryValue(num) {
        this.memory = num
    }

    executeCommand(command) {
        this.val = command.execute(this.val)
        this.history.push(command)
    }


    executeMemoryCommand(command) {
        this.memory = command.execute(this.memory)
    }
}