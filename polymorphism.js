//overloding
//overriding

// class Calc{
//     add(){
//         console.log("inside no arg method");
//     }
//     add(num1){
//         console.log("inside one args method");
//     }
//     add(num1,num2){
//         console.log("inside two args menthod");
//     }

// }
// var obj=new Calc();
// obj.add();
// obj.add(num1);
// obj.add(num1,num2);

//overriding
// class Parent{
//     phone(){
//         console.log("inside parent phone");
//     }
// }
// class Child extends Parent{
//     phone(){
//     console.log("inside child");


// }
// }
// var obj=new Child();
// obj.phone();


// var obj=new Calc();
// obj.add();
// obj.add(num1);
// obj.add(num1,num2);

//overriding
class Parent{
    phone(){
        console.log("inside parent phone");
    }
}
class Child extends Parent{
    phone(){
    super.phone()
    console.log("inside child");
}
}
var obj=new Child();
obj.phone();


