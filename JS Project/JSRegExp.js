/*
Regular Expressions:
-------------Search:-------------

Ex:
var str = "Hello World!";
var pattern = /Hello/;
console.log(str.search(pattern));

Ex:
var str = "Hello World! hello how are you";
var pattern = /hello/i;
console.log(pattern.test(str));

Ex: -----------replace;---------------
var str = "hello world";
var patt = /world/;
console.log(str.replace(patt,"hi"));

-------------------------------------------------

Ex: match, i(case insensitive) modifier

var str = "Hello how are you";
var pattern = /How/i;
console.log(str.match(pattern));

Ex: g modifier
var str = "Hello how are you hello Hello hi how are hello";
var pattern = /hello/ig;
console.log(str.match(pattern));

Ex: m modifier

var str = "\nIs th\nis it?\nis this";
var pattern = /^is/mg;
console.log(str.match(pattern));

-----------------------------------------------------------------

Ex: []brackets

var str = "search your string here";
var pattern = /[aoie]/g;
console.log(str.match(pattern));

var str = "search your string here";
var pattern = /[a-h]/g;
console.log(str.match(pattern));

var str = "search your string here";
var pattern = /[^a-h]/g;
console.log(str.match(pattern));

var str ="hello 123 hi63 7how34 2world9";
var pattern = /[1-5]/g;
console.log(str.match(pattern));

var str ="hello 123 hi63 7how34 2world9";
var pattern = /[^1-5]/g;
console.log(str.match(pattern));

var str = "re, green, red, green, gren, gr, blue, yellow,wheat";
var pattern = /(red|green|wheat)/g;
console.log(str.match(pattern));

-------------------------------------------------------------

Metacharacters

Ex: .

var str ="that hit hat path chat ";
var pat = /h.t/g;
console.log(str.match(pat));

Ex. \w 
var str ="Hello 1000 hi @#$";
var pat = /\w/g;
console.log(str.match(pat));

\W
var str ="Hello 1000 hi @#$";
var pat = /\W/g;
console.log(str.match(pat));

\d
var str ="Hello 1000 hi @#$";
var pat = /\d/g;
console.log(str.match(pat));

\D
var str ="Hello 1000 hi @#$";
var pat = /\D/g;
console.log(str.match(pat));

\s
var str = "Is this all there is?";
var pat = /\s/g;
console.log(str.match(pat));

\S
var str = "Is this all there is?";
var pat = /\S/g;
console.log(str.match(pat));

\b
var str = "Visit W3Schools W3Schools";
var patt1 = /\bW3/g;
console.log(str.match(patt1));

\B
var str = "Visit W3Schools W3Schools";
var patt1 = /\Bchool/g;
console.log(str.match(patt1));

\0
var str ="Visit \0W3Schools.Learn JavaScript.";
var patt1 = /\0/;
console.log(str.match(patt1));

\n
var str ="Visit \nW3Schools.Learn JavaScript.";
var patt1 = /\n/;
console.log(str.match(patt1));
*/

