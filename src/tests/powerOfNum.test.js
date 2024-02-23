import Calculator from '../Calculator';
import Sum from '../commands/Sum';
import {Square, Cube} from '../commands/PowerOfNum';

test('square num: 2 ** 2 = 4', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new Square(2))
    expect(calculator.val).toBe(4);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('square num: 5 ** 2 = 25', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(5))
    calculator.executeCommand(new Square(2))
    expect(calculator.val).toBe(25);
    calculator.undo()
    expect(calculator.val).toBe(5);
});
test('cube num: 2 ** 3 = 8', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(2))
    calculator.executeCommand(new Cube(3))
    expect(calculator.val).toBe(8);
    calculator.undo()
    expect(calculator.val).toBe(2);
});
test('square num: 3 ** 3 = 27', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(3))
    calculator.executeCommand(new Cube(3))
    expect(calculator.val).toBe(27);
    calculator.undo()
    expect(calculator.val).toBe(3);
});