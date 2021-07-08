// class Person{
//     mobile(){
//         console.log("inside parent mobile method");
//     }
// }
// class Child extends Person{


// }
// var Child=new Child();
// Child.mobile();


//multilevel inheritance

class Person{
    mobile(){
        console.log("inside parent mobile method");
    }
}
class person1 extends Person{
    m2(){
        console.log("inside parent");
    }


}
class parent extends person1 {

}
var obj=new parent();
obj.m2();
obj.mobile();