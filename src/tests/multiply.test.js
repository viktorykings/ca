import Calculator from '../Calculator';
import Multiply from '../commands/Multiply';
import Sum from '../commands/Sum';


test('multiply 2 * 2 to equal 4', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new Multiply(2))
    expect(calculator.val).toBe(4);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('multiply negative: -2 * -2 to equal 4', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(-2))
    calculator.executeCommand(new Multiply(-2))
    expect(calculator.val).toBe(4);
    calculator.undo()
    expect(calculator.val).toBe(-2);
});
test('multiply negative and positive -2 * 2 to equal -4', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(-2))
    calculator.executeCommand(new Multiply(2))
    expect(calculator.val).toBe(-4);
    calculator.undo()
    expect(calculator.val).toBe(-2);
});