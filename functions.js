// functions in javascript
//def function_name(param1,param2...):
//definition
function add(num1,num2){
    return num1+num2;
}
console.log(add(10,20));

// factorial
function fact(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
return fact
}
console.log(fact(5));
