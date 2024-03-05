import Calculator from "../Calculator";
import Divide from "../commands/Divide";
import Sum from "../commands/Sum";

test("division 4 / 2 to equal 2", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new Sum(4));
  calculator.executeCommand(new Divide(2));
  expect(calculator.val).toBe(2);
});
test("division 4 / 0 to be error", () => {
  const calculator = new Calculator();
  calculator.setValue(2);
  calculator.executeCommand(new Divide(0));
  expect(calculator.val).toBe("Error");
});
test("division 2 / 3 to be 0.66666667", () => {
  const calculator = new Calculator();
  calculator.setValue(2);
  calculator.executeCommand(new Divide(3));
  expect(calculator.val).toBe(0.66666667);
});
