import Calculator from '../Calculator';
import Subtraction from '../commands/Subtraction';
import Sum from '../commands/Sum';


test('substraction 5 - 2 to equal 3', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(5))
    calculator.executeCommand(new Subtraction(2))
    expect(calculator.val).toBe(3);
    calculator.undo()
    expect(calculator.val).toBe(5);
});
test('substraction negative: -2 - -3 to equal 1', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Subtraction(2))
    expect(calculator.val).toBe(-2);
    calculator.executeCommand(new Subtraction(-3))
    calculator.val
    expect(calculator.val).toBe(1);
    calculator.undo()
    expect(calculator.val).toBe(-2);
});
test('substraction negative and positive -5 - 2 to equal -2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Subtraction(5))
    expect(calculator.val).toBe(-5);
    calculator.executeCommand(new Subtraction(2))
    expect(calculator.val).toBe(-7);
    calculator.undo()
    expect(calculator.val).toBe(-5);
});
