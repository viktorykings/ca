import Calculator from '../Calculator';
import Sum from '../commands/Sum';
import {PowerOfNum, tenInPowerX, PowerOfTwo, PowerOfThree} from '../commands/PowerOfNum';

test('square num: 2 ** 2 = 4', () => {
    const calculator = new Calculator()
    calculator.setValue(2)
    calculator.executeCommand(new PowerOfTwo())
    expect(calculator.val).toBe(4);
});
test('square num: 5 ** 2 = 25', () => {
    const calculator = new Calculator()
    calculator.setValue(5)
    calculator.executeCommand(new PowerOfTwo())
    expect(calculator.val).toBe(25);
});
test('cube num: 2 ** 3 = 8', () => {
    const calculator = new Calculator()
    calculator.setValue(2)
    calculator.executeCommand(new PowerOfThree())
    expect(calculator.val).toBe(8);
});
test('cube num: 3 ** 3 = 27', () => {
    const calculator = new Calculator()
    calculator.setValue(3)
    calculator.executeCommand(new PowerOfThree())
    expect(calculator.val).toBe(27);
});
test('x in power y: 2 ** 5 = 27', () => {
    const calculator = new Calculator()
    calculator.setValue(2)
    calculator.executeCommand(new PowerOfNum(5))
    expect(calculator.val).toBe(32);
});
test('x in power y: 2 ** 5 = 27', () => {
    const calculator = new Calculator()
    calculator.setValue(2)
    calculator.executeCommand(new PowerOfNum(5))
    expect(calculator.val).toBe(32);
});
test('10 in power x: 10 ** 2 = 100', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new tenInPowerX(2))
    expect(calculator.val).toBe(100);
});
test('10 in power x: 10 ** 4 = 10000', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new tenInPowerX(4))
    expect(calculator.val).toBe(10000);
});