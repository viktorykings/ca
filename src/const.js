export const OPERATIONS = {
    sum: "+",
    substraction: "-",
    multiply: "*",
    division: "/",
    percentage: "%",
    ac: "ac",
    oppositeSign: "oppositeSign",
    equal: "=",
    mr: "mr",
    mc: "mc",
    mPlus: "m+",
    mMinus: "m-",
    x2: "x2",
    x3: "x3",
    xy: "xy",
    tenInPowerX: "10x",
    OneDivideByX: "1/x",
    squareRoot:"squareRoot",
    cubeRoot:"cubeRoot",
    yRoot: "yRoot",
    factorial: "x!",
};
export const memoryOPerators = [OPERATIONS.mc, OPERATIONS.mr, OPERATIONS.mPlus, OPERATIONS.mMinus]
export const oneOperandOperators = [OPERATIONS.oppositeSign, OPERATIONS.percentage, OPERATIONS.x2, OPERATIONS.x3, OPERATIONS.tenInPowerX, OPERATIONS.squareRoot, OPERATIONS.cubeRoot, OPERATIONS.OneDivideByX, OPERATIONS.factorial]
export const twoOperandOperators = [OPERATIONS.sum, OPERATIONS.substraction, OPERATIONS.division, OPERATIONS.multiply, OPERATIONS.xy, OPERATIONS.yRoot]
export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];