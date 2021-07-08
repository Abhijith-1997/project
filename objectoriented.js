// class Person{
// setvalues(age,name){
//     this.age=age;
//     this.name=name;
// }
// printvalues(){
//     console.log(this.age,this.name);
// }
// }
// var obj=new Person();
// obj.setvalues(25,"abhin")
// obj.printvalues()

//constructor

class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    printvalues(){
        console.log(this.age,this.name);
    }
    }
    var obj=new Person(24,"abhi");
    
    obj.printvalues()