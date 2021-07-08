// function add(...args){
//     console.log(args);
//     return args.reduce((num1,num2)=>num1+num2)
// }
// console.log(add(12,34,7,9,7));

function findmax(...args){
   
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(findmax(12,34,7,9,7));

