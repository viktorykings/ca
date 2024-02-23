import Calculator from '../Calculator';
import Sum from '../commands/Sum';
import {SquareRoot, CubeRoot, RootOfNum} from '../commands/RootOfNum';

test('root num:  sqrt(4) = 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(4))
    calculator.executeCommand(new RootOfNum(2))
    expect(calculator.val).toBe(2);
    calculator.undo()
    expect(calculator.val).toBe(4);
});
test('root num:  cube(27) = 3', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(27))
    calculator.executeCommand(new RootOfNum(3))
    expect(calculator.val).toBe(3);
    calculator.undo()
    expect(calculator.val).toBe(27);
});
test('root num:  root x(32) = 2', () => {
    const calculator = new Calculator()
    calculator.executeCommand(new Sum(32))
    calculator.executeCommand(new RootOfNum(5))
    expect(calculator.val).toBe(2);
    calculator.undo()
    expect(calculator.val).toBe(32);
});