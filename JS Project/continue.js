/*  Continue ;

function x(){
    var i;
    for (i = 0; i <= 5; i++) {
        if (i == 3) {
            continue;
    }
    console.log(i);
}
}
x();*/



//1.
/*function myFunction(a, b) {
    var c=a+b;
console.log(c)
  return a + b;
}
myFunction(2,3);*/

//2.
/*function add(a,b){
    var c=a+b;
    console.log(c);
}
add(2,3);*/

//3.
/*var a=10,b=2;
function add(){
   
    return a*b;
}
console.log(add());*/

//4.
/*var a=10,b=20;
function multiply(){
    var c=a*b;
    console.log(c);
}
multiply();*/






// function register(username,password){
//     if(username === "sowmya" && password === "abcde"){
//         console.log("registered");
//     }
// else{
//     console.log("not registered");
// }
// }
// register("sowmya","abcde");


//register function

// function register(username,emailid,password,mobileNo){

//     if(username ==="" || 
//        emailid ==="" ||
//        password ==="" ||
//        mobileNo.value.length !=10){

//             console.log('Please enter username');
//             return false;
//        }
//        else{
//           console.log("input entered");
//           return true;
//           }


       
// }
// register("sowmya","","","123456789");


// function myFunc(x){
//     console.log(x());
// }

// var myNewFunction=function(){     //anonymous function: function without a function name
//     console.log("hello");
//     return "example of function expression"
// }

// myFunc(myNewFunction);


// function myFunc(username){
//     console.log(username());
// }

// var newFunction = function(){
//     return "enter your username";
// }

// myFunc(newFunction);


// var getRectArea = function(width, height) {
//     return width * height;
// }

// console.log(getRectArea(3,4));


//calculate area using function expression 

function area(width,height){
    var result = width*height();
    console.log(result);
}
var area_height=function(){
    return 100;
}

var area_width="15";

area(area_width,area_height);
 