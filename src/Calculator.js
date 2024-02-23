export default class Calculator {
    constructor() {
        this.val = 0
        this.history = []
    }
    executeCommand(command) {
        this.val = command.execute(this.val)
        this.history.push(command)
    }
    undo() {
        const command = this.history.pop()
        this.val = command.undo(this.val)
    }
}