import Calculator from '../Calculator';
import Sum from '../commands/Sum';
import {SquareRoot, CubeRoot, RootOfNum} from '../commands/RootOfNum';

test('root num:  sqrt(4) = 2', () => {
    const calculator = new Calculator()
    calculator.setValue(4)
    calculator.executeCommand(new SquareRoot())
    expect(calculator.val).toBe(2);
});
test('root num:  cube(27) = 3', () => {
    const calculator = new Calculator()
    calculator.setValue(27)
    calculator.executeCommand(new CubeRoot())
    expect(calculator.val).toBe(3);
});
test('root num:  root x(32) = 2', () => {
    const calculator = new Calculator()
    calculator.setValue(5)
    calculator.executeCommand(new RootOfNum(32))
    expect(calculator.val).toBe(2);
});