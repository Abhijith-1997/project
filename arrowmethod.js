//create a js function for find cube of a number
// function cube(num){
//     return num**3;
// }
var cube=(num)=>num**3

var add=(num1,num2)=>num1+num2
console.log(cube(3));
console.log(add(10,7));
//


//create  a arrow function that will return largest of two number
var large=(num1,num2)=>num1>num2?num1:num2
console.log(large(10,6));

//return odd or even
 var numchk=num=>num%2==0?"even":"odd"
 console.log(numchk(15));
 //map filter reduce some find 