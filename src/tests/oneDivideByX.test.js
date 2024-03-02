import Calculator from '../Calculator';
import OneDivideByX from '../commands/OneDivideByX';


test('division 1 / 2 to equal 0.5', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new OneDivideByX(2))
    expect(calculator.val).toBe(0.5);
});
test('division 1 / 10 to equal 0.1', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new OneDivideByX(10))
    expect(calculator.val).toBe(0.1);
});
