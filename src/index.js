import Calculator from "./Calculator";
import Sum from "./commands/Sum";
import Substraction from "./commands/Substraction";
import Multiply from "./commands/Multiply";
import Divide from "./commands/Divide";
import SighChange from "./commands/SighChange";
import { OPERATIONS, numbers } from './const';
import './style.css'
const btns = document.getElementById('numBoard');
const calculator = new Calculator();
console.log('initial:', calculator.val)

let a = 0
let operator = 0
let b = 0
let isCompleted = false
function invokeCommand(e) {
    if (!numbers.includes(e.target.value) && e.target.value !== OPERATIONS.equal) operator = e.target.value
    if(numbers.includes(e.target.value)){
        if (!b && !operator) {
            a += e.target.value
            calculator.setValue(+a)
        }else if(a && b && isCompleted){
            b = e.target.value
        } else {b += e.target.value}
    }

if(a && operator && !isCompleted){
    console.log(calculator.val, operator,+b)
    switch(operator){
        case (OPERATIONS.oppositeSign):
            calculator.initialVal = calculator.executeCommand(new SighChange())
            break
    }

    if(b){
        switch (operator) {
        case (OPERATIONS.equal): 
        case (OPERATIONS.sum): 
        calculator.executeCommand(new Sum(+b))
            console.log( 'after sum',calculator.val)
            b=0
            break
        case (OPERATIONS.substraction):
            calculator.setValue(calculator.executeCommand(new Substraction(+b)))
            b=0
            break
        case (OPERATIONS.multiply):
            calculator.initialVal = calculator.executeCommand(new Multiply(+b))
            b=0
            break
        case (OPERATIONS.division):
            calculator.initialVal = calculator.executeCommand(new Divide(+b))
            b=0
            break
        }
    }

}

}
btns.addEventListener('click', (e) => invokeCommand(e))

