import Calculator from "./Calculator";
import Sum from "./commands/Sum";
import Substraction from "./commands/Substraction";
import Multiply from "./commands/Multiply";
import Divide from "./commands/Divide";
import SighChange from "./commands/SighChange";
import Percentage from "./commands/Percentage";
import { PowerOfNum, tenInPowerX, PowerOfTwo, PowerOfThree } from "./commands/PowerOfNum";
import { RootOfNum, SquareRoot, CubeRoot } from "./commands/RootOfNum";
import OneDivideByX from "./commands/OneDivideByX";
import Factorial from "./commands/Factorial";
import { OPERATIONS, numbers } from './const';
import './style.css'
import { MemoryAdd, MemoryClear, MemorySubstract, MemoryRecall } from "./commands/Memory";
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
    [OPERATIONS.squareRoot, SquareRoot],
    [OPERATIONS.cubeRoot, CubeRoot],
    [OPERATIONS.yRoot, RootOfNum],
    [OPERATIONS.OneDivideByX, OneDivideByX],
    [OPERATIONS.factorial, Factorial],
    [OPERATIONS.mc, MemoryClear],
    [OPERATIONS.mr, MemoryRecall],
    [OPERATIONS.mPlus, MemoryAdd],
    [OPERATIONS.mMinus, MemorySubstract],
])
const memoryOPerators = [OPERATIONS.mc, OPERATIONS.mr, OPERATIONS.mPlus, OPERATIONS.mMinus]
const oneOperandOperators = [OPERATIONS.oppositeSign, OPERATIONS.percentage, OPERATIONS.x2, OPERATIONS.x3, OPERATIONS.tenInPowerX, OPERATIONS.squareRoot, OPERATIONS.cubeRoot, OPERATIONS.OneDivideByX, OPERATIONS.factorial]
const twoOperandOperators = [OPERATIONS.sum, OPERATIONS.substraction, OPERATIONS.division, OPERATIONS.multiply, OPERATIONS.xy, OPERATIONS.yRoot]

let a = 0
let operator = 0
let b = 0
let isCompleted = false
let shouldCalculate = false
function invokeCommand(e) {

    if (memoryOPerators.includes(e.target.value)) {
        const Command = commands.get(e.target.value)
        if (e.target.value === OPERATIONS.mr) {
            calculator.executeMemoryCommand(new Command(calculator.memory))
            if (!b) {
                b = calculator.memory
            } else a = calculator.memory
        } else calculator.executeMemoryCommand(new Command(+a))

        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        console.log(a, b, operator)
    }

    if (a && operator && b && !numbers.includes(e.target.value)) {
        shouldCalculate = true
    }
    if (a && b && shouldCalculate) {
        const command = commands.get(operator)
        calculator.executeCommand(new command(+b))
        b = 0
        isCompleted = true
        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        a = calculator.val
        shouldCalculate = false
    }

    if (twoOperandOperators.includes(e.target.value)) operator = e.target.value

    if (twoOperandOperators.includes(e.target.value) || numbers.includes(e.target.value) || e.target.value === OPERATIONS.percentage) sequencePlace.value += e.target.value;

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
        operator = 0
        a = calculator.val
        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        isCompleted = true

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

