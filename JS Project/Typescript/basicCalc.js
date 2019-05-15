var BasicCalc = /** @class */ (function () {
    function BasicCalc() {
    }
    BasicCalc.prototype.add = function (firstNum, secondNum) {
        console.log(firstNum + secondNum);
    };
    BasicCalc.prototype.minus = function (firstNum, secondNum) {
        console.log(firstNum - secondNum);
    };
    BasicCalc.prototype.multiply = function (firstNum, secondNum) {
        console.log(firstNum * secondNum);
    };
    BasicCalc.prototype.divide = function (firstNum, secondNum) {
        console.log(firstNum / secondNum);
    };
    return BasicCalc;
}());
var Calc = new BasicCalc();
Calc.add(10, 30);
Calc.minus(10, 30);
Calc.multiply(10, 30);
Calc.divide(30, 10);
