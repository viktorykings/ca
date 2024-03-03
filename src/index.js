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
import themeSwitchFunc from "./theme";
import { MemoryAdd, MemoryClear, MemorySubstract, MemoryRecall } from "./commands/Memory";
const btns = document.getElementById('numBoard');
const themeSwitcher = document.getElementById('themeSwitch')
let theme = 'theme-orange'
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

let a = ''
let operator = ''
let b = ''
let isCompleted = false
let shouldCalculate = false
function invokeCommand(e) {
    if (twoOperandOperators.includes(e.target.value)) operator = e.target.value

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
    }

    if (oneOperandOperators.includes(e.target.value)) {
        a = calculator.val
        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        isCompleted = true

        const Command = commands.get(e.target.value)
        if (!b) {
            calculator.executeCommand(new Command(+a))
        } else {
            calculator.executeCommand(new Command(+b))
            if (operator === OPERATIONS.substraction || operator === OPERATIONS.sum) {
                b = calculator.val * a
            } else  b = calculator.val
            calculator.setValue(+a)
        }

        console.log(a,b,calculator.val, operator)
    }
    if (a && operator && b && !numbers.includes(e.target.value)) {
        shouldCalculate = true
    }
    if (a && b && shouldCalculate) {
        const command = commands.get(operator)
        calculator.executeCommand(new command(+b))
        b = ''
        operator = ''
        isCompleted = true
        resultPlace.value = calculator.val
        sequencePlace.value = calculator.val
        a = calculator.val
        shouldCalculate = false
    }
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
    sequencePlace.value = `${a}${operator}${b}`;

    if (e.target.value === OPERATIONS.ac) {
        calculator.setValue(0)
        resultPlace.value = ''
        sequencePlace.value = ''
        operator = ''
        a = ''
        b = ''
        isCompleted = false
        shouldCalculate = false
    }
    resultPlace.value = calculator.val
}
btns.addEventListener('click', (e) => invokeCommand(e))
themeSwitcher.addEventListener('click', (e) => {
    theme = themeSwitchFunc(e, theme);
})