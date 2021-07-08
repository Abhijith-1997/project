var user={
    username:"abhi",
    password:"abhi123"
}
localStorage.setItem(user.username,JSON.stringify(user))
function login(){
    let u_name=uname.value;
    let pwd=pwd.value;
    
}

// var user=JSON.parse(localStorage.getItem("abhi"))
// if(user.username==username&user.password==password){
//     console.log("sucess");
// }
// else{
//     console.log("failed");
// }

