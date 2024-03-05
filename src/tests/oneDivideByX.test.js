import Calculator from "../Calculator";
import OneDivideByX from "../commands/OneDivideByX";

test("division 1 / 2 to equal 0.5", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new OneDivideByX(2));
  expect(calculator.val).toBe(0.5);
});
test("division 1 / 10 to equal 0.1", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new OneDivideByX(10));
  expect(calculator.val).toBe(0.1);
});
test("division 1 / 0 to be error", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new OneDivideByX(0));
  expect(calculator.val).toBe("Error");
});
test("division 1 / 3 to equal 0.33333333", () => {
  const calculator = new Calculator();
  calculator.executeCommand(new OneDivideByX(3));
  expect(calculator.val).toBe(0.33333333);
});
