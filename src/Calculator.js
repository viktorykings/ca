export default class Calculator {
    constructor() {
        this.val = 0;
        this.history = []
    }
    setValue(num){
        this.val = num
    }

    executeCommand(command) {
        this.val = command.execute(this.val)
        this.history.push(command)
    }
}