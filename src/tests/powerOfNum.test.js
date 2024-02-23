import Calculator from '../Calculator';
import Sum from '../commands/Sum';
import {PowerOfNum, tenInPowerX} from '../commands/PowerOfNum';

test('square num: 2 ** 2 = 4', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new PowerOfNum(2))
    expect(calculator.val).toBe(4);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('square num: 5 ** 2 = 25', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(5))
    calculator.executeCommand(new PowerOfNum(2))
    expect(calculator.val).toBe(25);
    calculator.undo()
    expect(calculator.val).toBe(5);
});
test('cube num: 2 ** 3 = 8', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new PowerOfNum(3))
    expect(calculator.val).toBe(8);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('cube num: 3 ** 3 = 27', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(3))
    calculator.executeCommand(new PowerOfNum(3))
    expect(calculator.val).toBe(27);
    calculator.undo()
    expect(calculator.val).toBe(3);
});
test('x in power y: 2 ** 5 = 27', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new PowerOfNum(5))
    expect(calculator.val).toBe(32);
    calculator.undo()
    // expect(calculator.val).toBe(3);
});
test('x in power y: 2 ** 5 = 27', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new PowerOfNum(5))
    expect(calculator.val).toBe(32);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('10 in power x: 10 ** 2 = 100', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new tenInPowerX(2))
    expect(calculator.val).toBe(100);
    calculator.undo()
    expect(calculator.val).toBe(10);
});
test('10 in power x: 10 ** 4 = 10000', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new tenInPowerX(4))
    expect(calculator.val).toBe(10000);
    calculator.undo()
    expect(calculator.val).toBe(10);
});