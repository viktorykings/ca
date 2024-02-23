import Calculator from '../Calculator';
import Multiply from '../commands/Multiply';
import Sum from '../commands/Sum';


test('multiply 4 / 2 to equal 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(4))
    calculator.executeCommand(new Multiply(2))
    expect(calculator.val).toBe(8);
    calculator.undo()
    expect(calculator.val).toBe(4);
});