import Calculator from '../Calculator';
import Substraction from '../commands/Substraction';
import Sum from '../commands/Sum';


test('substraction 5 - 2 to equal 3', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(5))
    calculator.executeCommand(new Substraction(2))
    expect(calculator.val).toBe(3);
});
test('substraction negative: -2 - -3 to equal 1', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Substraction(2))
    expect(calculator.val).toBe(-2);
    calculator.executeCommand(new Substraction(-3))
    calculator.val
    expect(calculator.val).toBe(1);
});
test('substraction negative and positive -5 - 2 to equal -2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Substraction(5))
    expect(calculator.val).toBe(-5);
    calculator.executeCommand(new Substraction(2))
    expect(calculator.val).toBe(-7);
});
