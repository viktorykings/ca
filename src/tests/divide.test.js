import Calculator from '../Calculator';
import Divide from '../commands/Divide';
import Sum from '../commands/Sum';


test('division 4 / 2 to equal 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(4))
    calculator.executeCommand(new Divide(2))
    expect(calculator.val).toBe(2);
    calculator.undo()
    expect(calculator.val).toBe(4);
});
