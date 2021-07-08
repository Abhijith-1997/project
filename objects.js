// var person={
//     id:100,
//     name:"abhi",
//     age:23,
//     bloodgroup:"AB+ve"
// }
// console.log(person);
// // name
// console.log(person.name);
// //update
// person.age=24;
// console.log(person);
// //checking foe gender
// //console.log("gender "in person);
// if (!("gender "in person)){
//     person.gender="male"
// }
// console.log(person);

//create employee object with eid:1000,ename:ram,desig:developer
var employee={
    eid:1000,
    ename:"ram",
    desig:"developer",salary:30000
}
//console.log(employee);
//console.log(employee.desig);
employee.salary+=5000;
//console.log(employee);
if(!("gender" in employee)){
    employee.gender="male"
}
console.log(employee);