import Calculator from '../Calculator';
import Subtraction from '../commands/Subtraction';
import Sum from '../commands/Sum';
import SighChange from '../commands/SighChange';


test('sign change: -2 -> 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Subtraction(2))
    calculator.executeCommand(new SighChange())
    expect(calculator.val).toBe(2);
    calculator.undo()
    expect(calculator.val).toBe(-2);
});
test('sign change: 2 -> -2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new SighChange())
    expect(calculator.val).toBe(-2);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('sign change: 0 doesnt change sign', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new SighChange())
    expect(calculator.val).toBe(0);
    calculator.undo()
    expect(calculator.val).toBe(0);
});