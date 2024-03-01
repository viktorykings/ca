import Calculator from "./Calculator";
import Sum from "./commands/Sum";
import Substraction from "./commands/Substraction";
import Multiply from "./commands/Multiply";
import Divide from "./commands/Divide";
import SighChange from "./commands/SighChange";
import Percentage from "./commands/Percentage";
import { PowerOfNum, tenInPowerX, PowerOfTwo, PowerOfThree } from "./commands/PowerOfNum";
import { OPERATIONS, numbers } from './const';
import './style.css'
const btns = document.getElementById('numBoard');
const resultPlace = document.getElementById('currentVal')
const sequencePlace = document.getElementById('sequence')
const calculator = new Calculator();
console.log('initial:', calculator.val)

const commands = new Map([
    [OPERATIONS.sum, Sum],
    [OPERATIONS.division, Divide],
    [OPERATIONS.multiply, Multiply],
    [OPERATIONS.substraction, Substraction],
    [OPERATIONS.x2, PowerOfTwo],
    [OPERATIONS.x3, PowerOfThree],
    [OPERATIONS.xy, PowerOfNum],
    [OPERATIONS.tenInPowerX, tenInPowerX],
    [OPERATIONS.oppositeSign, SighChange],
    [OPERATIONS.percentage, Percentage],
])
// операции с одним числом и двумя разделить
// х в степени у подвязать к а и б
const basicOperators = [OPERATIONS.sum, OPERATIONS.substraction, OPERATIONS.division, OPERATIONS.multiply, OPERATIONS.xy]
const restOperators = [OPERATIONS.equal, OPERATIONS.ac, OPERATIONS.oppositeSign, OPERATIONS.mr, OPERATIONS.mc, OPERATIONS.mPlus, OPERATIONS.mMinus]
const instantlyInvokingOperators = [OPERATIONS.x2, OPERATIONS.x3, OPERATIONS.tenInPowerX]

const oneOperandOperators = [OPERATIONS.oppositeSign, OPERATIONS.mr, OPERATIONS.mc, OPERATIONS.mPlus, OPERATIONS.mMinus, OPERATIONS.percentage, OPERATIONS.x2, OPERATIONS.x3, OPERATIONS.tenInPowerX]
const twoOperandOperators = [OPERATIONS.sum, OPERATIONS.substraction, OPERATIONS.division, OPERATIONS.multiply, OPERATIONS.xy]

let a = 0
let operator = 0
let instantlyInvokingOperator = 0
let b = 0
let power = 0
let isCompleted = false
let shouldCalculate = false

function invokeCommand(e) {
    if (a && operator && b && !numbers.includes(e.target.value)) {
        shouldCalculate = true
    }
    if (a && b && shouldCalculate) {
        const command = commands.get(operator)
        calculator.executeCommand(new command(+b))
        console.log('triggered command:', commands.get(operator), calculator.val, a,b)
        b = 0
        isCompleted = true
        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        shouldCalculate = false
    }

    if (twoOperandOperators.includes(e.target.value)) operator = e.target.value

    if (instantlyInvokingOperators.includes(e.target.value) && a) {
        instantlyInvokingOperator = e.target.value
        if (e.target.value !== OPERATIONS.xy) {
            const Command = commands.get(instantlyInvokingOperator)
            calculator.executeCommand(new Command(+a))
        }
    }

    if (basicOperators.includes(e.target.value) || numbers.includes(e.target.value) || e.target.value === OPERATIONS.percentage) sequencePlace.value += e.target.value;

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

    if (oneOperandOperators.includes(e.target.value)) {
        const Command = commands.get(e.target.value)

        if (operator === OPERATIONS.substraction || operator === OPERATIONS.sum) {
            calculator.executeCommand(new Command(+b))
            b = calculator.val * a
            calculator.setValue(+a)
        } else calculator.executeCommand(new Command(+a))

    }

    if (e.target.value === OPERATIONS.ac) {
        calculator.setValue(0)
        resultPlace.value = ''
        sequencePlace.value = ''
        operator = 0
        a = 0
        b = 0
        isCompleted = false
        shouldCalculate = false
    }
    resultPlace.value = calculator.val
}
btns.addEventListener('click', (e) => invokeCommand(e))

