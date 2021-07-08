// var num1=63,num2=14;
// for(let i=1;i<=14;i++){
//     if(num1%i==0&num2%i==0){
//         console.log(+i);

//     }
// } 
var num1=14,num2=63;
var low=0;
if(num1<num2){
    low=num1;
}
else{
    low=num2;
}
var factor=0;
for(let i=2;i<=low;i++){
    if(num1%i==0&num2%i==0){
        factor=i;

    }
} 
console.log(factor);