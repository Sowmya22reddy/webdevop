var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.m1 = function () {
        console.log("m1 in A");
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.a = 10;
    }
    B.prototype.m1 = function () {
        console.log("m1 in B");
    };
    return B;
}());
var x;
x = new B();
x.m1();
