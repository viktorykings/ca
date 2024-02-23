import Calculator from '../Calculator';
import Sum from '../commands/Sum';


test('sum 0 + 2 to equal 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    expect(calculator.val).toBe(2);
    calculator.undo()
    expect(calculator.val).toBe(0);
});
test('sum negative: -5 + -2 to equal -7', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(-5))
    expect(calculator.val).toBe(-5);
    calculator.executeCommand(new Sum(-2))
    expect(calculator.val).toBe(-7);
    calculator.undo()
    expect(calculator.val).toBe(-5);
});
test('sum negative and positive: -5 + -2 to equal -3', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(-5))
    expect(calculator.val).toBe(-5);
    calculator.executeCommand(new Sum(2))
    expect(calculator.val).toBe(-3);
    calculator.undo()
    expect(calculator.val).toBe(-5);
});