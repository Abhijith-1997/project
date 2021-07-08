function displayvalue(num){
    let inputbox=document.getElementById("impt")
    inputbox.value+=num
}

function evaluateExpression(){
    let cur_value=impt.value;
    let res=eval(cur_value);
    impt.value=res;

}
function clearBox(){
    impt.value="";
}