import Calculator from "../Calculator";
import Percentage from "../commands/Percentage";

test("10% === 0.1", () => {
  const calculator = new Calculator();
  calculator.setValue(10);
  expect(calculator.val).toBe(10);
  calculator.executeCommand(new Percentage(10));
  expect(calculator.val).toBe(0.1);
});
test("percentage: 0 = 0", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new Percentage());
  expect(calculator.val).toBe(0);
});
