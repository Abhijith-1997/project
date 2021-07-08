// //key.value
// localStorage.setItem("password","abc")
// localStorage.setItem("username","luminar")

// var uname=localStorage.getItem("username")
// console.log(uname);
// var pwd=localStorage.getItem("password")
// console.log(pwd);

// localStorage.removeItem("password")
// localStorage.removeItem("username")
// localStorage.clear()// clear local storage
 
// localStorage.setItem("book_name","alchemist")
// console.log(localStorage.key(0));
// localStorage.setItem("book_price",150)
// console.log(localStorage.key(1));

// var book={
//     book_name:"the alchemist",
//     author:"paulo",
//     book_price:150,
//     page:200
// }
// // localStorage.setItem(book.book_name,JSON.stringify(book))
// var data=JSON.parse(localStorage.getItem("the alchemist"))
// console.log(data.book_price);

var user={
    username:"luminar",
    password:"abc123",
    mailid:"abc@123"
}
var user1={
    username:"technolab",
    password:"ytecc123",
    mailid:"techc@123"
}
// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.setItem(user1.username,JSON.stringify(user1))

var uname="luminar123"
var pwd="aaa123"
var user=JSON.parse(localStorage.getItem("luminar"))
if(user.username==uname& user.password==pwd){
    console.log("sucess");
}
else{
    console.log("failed");
}