import Calculator from "./Calculator";
import Sum from "./commands/Sum";
import Substraction from "./commands/Substraction";
import Multiply from "./commands/Multiply";
import Divide from "./commands/Divide";
import SighChange from "./commands/SighChange";
import Percentage from "./commands/Percentage";
import { OPERATIONS, numbers } from './const';
import './style.css'
const btns = document.getElementById('numBoard');
const resultPlace = document.getElementById('currentVal')
const sequencePlace = document.getElementById('sequence')
const calculator = new Calculator();
console.log('initial:', calculator.val)

const commands = new Map([
    ['+', Sum],
    ['/', Divide],
    ['*', Multiply],
    ['-', Substraction],
])

const basicOperators = ['+', '-', '/', '*']

let a = 0
let operator = 0
let b = 0
let isCompleted = false
let shouldCalculate = false

function invokeCommand(e) {
    console.log(isCompleted)
    if (basicOperators.includes(e.target.value)) operator = e.target.value

    if(e.target.value !== OPERATIONS.ac && e.target.value !== OPERATIONS.equal) sequencePlace.value += e.target.value;

    if (numbers.includes(e.target.value)) {
        if (!b && !operator) {
            a += e.target.value
            calculator.setValue(+a)
        } else if (a && b && isCompleted) {
            b += e.target.value
            isCompleted = false
        } else {
            b += e.target.value
        }
    }

    if (a && operator && b && !numbers.includes(e.target.value)) {
        shouldCalculate = true
    }

    if (e.target.value === OPERATIONS.percentage) {
        a = calculator.val
        calculator.executeCommand(new Percentage(+b))
        b = calculator.val
        calculator.setValue(a)

        if (operator === OPERATIONS.sum || operator === OPERATIONS.substraction) {
            const Command = commands.get(operator)
            const num = a * b
            calculator.executeCommand(new Command(num))
            b = 0
        }

        resultPlace.value = calculator.val
    }

    if(e.target.value === OPERATIONS.ac) {
        calculator.setValue(0)
        resultPlace.value = ''
        sequencePlace.value = ''
        isCompleted = false
        shouldCalculate = false
    }

    if(e.target.value === OPERATIONS.oppositeSign){
        calculator.executeCommand(new SighChange())
    }

    if (a && b && shouldCalculate) {
        if (e.target.value === OPERATIONS.equal) {
            console.log(commands.get(operator))
            const Command = commands.get(operator)
            calculator.executeCommand(new Command(+b))
            console.log('triggered equal', calculator.val, operator)
            sequencePlace.value = ''
            resultPlace.value = calculator.val
            a = calculator.val
            b = 0
            isCompleted = true
            shouldCalculate = false
        }
        const command = commands.get(operator)
        calculator.executeCommand(new command(+b))
        console.log('triggered command:', commands.get(operator), calculator.val)
        b = 0
        isCompleted = true
        resultPlace.value = calculator.val
    }

}
btns.addEventListener('click', (e) => invokeCommand(e))

