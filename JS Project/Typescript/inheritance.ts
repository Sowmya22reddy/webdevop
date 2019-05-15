class BasicCalc{
    firstNum:number;
    secondNum:number;

    add(firstNum,secondNum){
        console.log(firstNum+secondNum);
    }
}

class ScientificCalc extends BasicCalc{
    input:number;

    square(input){
        console.log(input*input);
    }
}

var sc = new ScientificCalc();
sc.add(10,20);
sc.square(20);