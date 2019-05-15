
// function myFunc(){
//     var arr = ['abc',1,2,'hello',true,false,'string'];
  
//     console.log(
//         arr.filter(e => typeof e === 'string')
//       );

//       console.log(
//           arr.filter(e => typeof e === "number")
//       );

//       console.log(
//           arr.filter(e => typeof e === "boolean")
//       );

// }
// myFunc(); 

//--------------------------------------------------------------------------------------------------------

// function myFunc(arr)
// {
//     arr.push(7);       // push 7 into array
// }
// let arr = ['abc',1,2,'hello',true,false,'string'];
// myFunc(arr);          // print array
// console.log(arr);
// //prints nly strings from array
// console.log(
//     arr.filter(e => typeof e === 'string') 
// );
// //prints numbers from array
// console.log(
//     arr.filter(e => typeof e === "number")
// );
// //prints boolean values from array
// console.log(
//     arr.filter(e => typeof e === "boolean")
// );




// function reverse(s) {
//     var o = 'hello';
//     for (var i = s.length - 1; i >= 0; i--)
//       o += s[i];
//     return o;
//     }
//     reverse('hello');
//     console.log(o);


var string = "Please check your required string.";
    var newString ="string";

function myFunction(chkString) {
    
    if(string.indexOf(chkString)>=0){
        console.log(chkString  + "string present");
    }
    else{
        console.log(chkString  + "string is not there");
    }
   
  }
  myFunction(newString);
  
  