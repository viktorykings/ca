import Calculator from '../Calculator';
import Substraction from '../commands/Substraction';
import Sum from '../commands/Sum';
import Percentage from '../commands/Percentage';


test('10% === 0.1', () => {
    const calculator = new Calculator()
    calculator.setValue(10)
    expect(calculator.val).toBe(10);
    calculator.executeCommand(new Percentage(10))
    expect(calculator.val).toBe(0.1);
    calculator.undo()
    expect(calculator.val).toBe(10);
});
test('percentage: 0 = 0', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Percentage())
    expect(calculator.val).toBe(0);
    calculator.undo()
    expect(calculator.val).toBe(0);
});