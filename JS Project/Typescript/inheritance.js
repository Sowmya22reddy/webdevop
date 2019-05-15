var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCalc = /** @class */ (function () {
    function BasicCalc() {
    }
    BasicCalc.prototype.add = function (firstNum, secondNum) {
        console.log(firstNum + secondNum);
    };
    return BasicCalc;
}());
var ScientificCalc = /** @class */ (function (_super) {
    __extends(ScientificCalc, _super);
    function ScientificCalc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScientificCalc.prototype.square = function (input) {
        console.log(input * input);
    };
    return ScientificCalc;
}(BasicCalc));
var sc = new ScientificCalc();
sc.add(10, 20);
sc.square(20);
