import Calculator from '../Calculator';
import Factorial from '../commands/Factorial';


test('factorial 5 = 120', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Factorial(5))
    expect(calculator.val).toBe(120);
    calculator.undo()
    expect(calculator.val).toBe(5);
});
test('factorial 5 = 120', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Factorial(0))
    expect(calculator.val).toBe(1);
    calculator.undo()
    expect(calculator.val).toBe(0);
});