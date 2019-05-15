class A{
    m1(){
        console.log("m1 in A");
    }
}

class B{
    a=10;
    m1(){
        console.log("m1 in B");
    }
}

var x:A;
x=new B();
x.m1();