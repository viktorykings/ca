export default class Calculator {
    constructor() {
        this.val = 0;
        this.history = []
    }
    setValue(num){
        this.val = num
        console.log('in set value method: ', this.val)
    }

    executeCommand(command) {
        this.val = command.execute(this.val)
        console.log(this.val)
        this.history.push(command)
    }
    undo() {
        const command = this.history.pop()
        this.val = command.undo(this.val)
    }
}