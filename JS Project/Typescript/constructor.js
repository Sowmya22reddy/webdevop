var Employee = /** @class */ (function () {
    function Employee(name, address) {
        this.ename = name;
        this.eaddress = address;
    }
    return Employee;
}());
var emp = new Employee("sowmya", "hyderabad");
console.log(emp);
var emp1 = new Employee("divya", "bangalore");
console.log(emp1);
