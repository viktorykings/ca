import Calculator from "./Calculator";
import Sum from "./commands/Sum";
import Substraction from "./commands/Substraction";
import Multiply from "./commands/Multiply";
import Divide from "./commands/Divide";
import SighChange from "./commands/SighChange";
import Percentage from "./commands/Percentage";
import {
  PowerOfNum,
  TenInPowerX,
  PowerOfTwo,
  PowerOfThree,
} from "./commands/PowerOfNum";
import { RootOfNum, SquareRoot, CubeRoot } from "./commands/RootOfNum";
import OneDivideByX from "./commands/OneDivideByX";
import Factorial from "./commands/Factorial";
import {
  OPERATIONS,
  numbers,
  oneOperandOperators,
  twoOperandOperators,
  memoryOPerators,
} from "./const";
import "./style.css";
import themeSwitchFunc from "./theme";
import {
  MemoryAdd,
  MemoryClear,
  MemorySubstract,
  MemoryRecall,
} from "./commands/Memory";
import { unactiveBtn, activeBtn } from "./keyboardHandlers";

const btns = document.getElementById("numBoard");
const themeSwitcher = document.getElementById("themeSwitch");
let theme = "theme-orange";
const resultPlace = document.getElementById("currentVal");
const sequencePlace = document.getElementById("sequence");
const calculator = new Calculator();

const commands = new Map([
  [OPERATIONS.sum, Sum],
  [OPERATIONS.division, Divide],
  [OPERATIONS.multiply, Multiply],
  [OPERATIONS.substraction, Substraction],
  [OPERATIONS.x2, PowerOfTwo],
  [OPERATIONS.x3, PowerOfThree],
  [OPERATIONS.xy, PowerOfNum],
  [OPERATIONS.tenInPowerX, TenInPowerX],
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
]);

let a = "";
let operator = "";
let b = "";
let isCompleted = false;
let shouldCalculate = false;

function invokeCommand(e) {
  const target = e.key ? e.key : e.target.value;
  if (target === ".") a = 0;
  if (!a && target === "-") a = target;

  if (memoryOPerators.includes(target)) {
    const Command = commands.get(target);
    if (target === OPERATIONS.mr) {
      calculator.executeMemoryCommand(new Command(calculator.memory));
      if (!b) {
        b = calculator.memory;
        shouldCalculate = true;
      } else a = calculator.memory;
    } else calculator.executeMemoryCommand(new Command(+a));

    resultPlace.value = calculator.val;
    sequencePlace.value = calculator.val;
  }

  if (oneOperandOperators.includes(target)) {
    const Command = commands.get(target);

    if (!b) {
      calculator.executeCommand(new Command(+a));
      a = calculator.val;
    } else {
      calculator.executeCommand(new Command(+b));
      if (operator === OPERATIONS.substraction || operator === OPERATIONS.sum) {
        b = calculator.val * a;
      } else b = calculator.val;
      calculator.setValue(+a);
    }
    resultPlace.value = calculator.val;
    isCompleted = true;
  }
  if (a && operator && b !== "" && !numbers.includes(target)) {
    shouldCalculate = true;
  }
  if (a && b !== "" && shouldCalculate) {
    const Command = commands.get(operator);
    calculator.executeCommand(new Command(+b));
    b = "";
    operator = "";
    isCompleted = true;
    resultPlace.value = calculator.val;
    sequencePlace.value = calculator.val;
    a = calculator.val;
    shouldCalculate = false;
  }
  if (twoOperandOperators.includes(target)) operator = target;

  if (numbers.includes(target)) {
    if (!b && !operator) {
      a += target;
      calculator.setValue(+a);
    } else if (a && b && isCompleted) {
      b += target;
      isCompleted = false;
    } else {
      b += target;
    }
  }
  sequencePlace.value = `${a}${operator}${b}`;

  if (target === OPERATIONS.ac || e.key === "Delete") {
    calculator.setValue(0);
    resultPlace.value = "";
    sequencePlace.value = "";
    operator = "";
    a = "";
    b = "";
    isCompleted = false;
    shouldCalculate = false;
  }
  if (e.key === "Enter") resultPlace.value = calculator.val;
}
btns.addEventListener("click", (e) => invokeCommand(e));
themeSwitcher.addEventListener("click", (e) => {
  theme = themeSwitchFunc(e, theme);
});
window.addEventListener("keydown", (e) => {
  activeBtn(e);
  invokeCommand(e);
});
window.addEventListener("keyup", unactiveBtn);
