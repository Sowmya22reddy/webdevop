class BasicCalc{

    firstNum:number;
    secondNum:number;
    add(firstNum,secondNum){
        console.log(firstNum+secondNum);
    }

    minus(firstNum,secondNum){
        console.log(firstNum-secondNum);
    }

    multiply(firstNum,secondNum){
        console.log(firstNum*secondNum);
    }

    divide(firstNum,secondNum){
        console.log(firstNum/secondNum);
    }
}

var Calc = new BasicCalc();
Calc.add(10,30);
Calc.minus(10,30);
Calc.multiply(10,30);
Calc.divide(30,10);
