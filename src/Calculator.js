export default class Calculator {
    constructor() {
        this.val = 0
        /* this.b = 0
        this.operator = ''
        this.history = [] */
    }
    executeCommand(command) {
        this.val = command.execute(this.val)
        /* this.history.push(command) */
    }
    /* undo(){
    const command = this.history.pop()
    this.a = command.undo(this.value)
    } */
}