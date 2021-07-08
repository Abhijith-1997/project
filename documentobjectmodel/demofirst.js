// var current_url=document.URL;//document is object,url is attributes
// alert(current_url);

// var htwos=document.getElementsByTagName("h2");
// for(let tag of htwos){
//     tag.style.color="red";
// }

// var hone=document.getElementById("one");
// hone.style.color="green";

// var lone=document.getElementsByTagName("li");
// for(let tag of lone){
//     tag.style.color="blue";
// }

// var element=document.getElementsByClassName("second");
// for(let tag of element){
// tag.style.color="yellow"
// }

var query=document.querySelectorAll(".third");
for(let tag of query){
    tag.style.color="red"
}
var query=document.querySelector("#one");
    query.style.color="green"

 var query=document.querySelectorAll(".second");
for(let tag of query){
    tag.style.color="blue"
}
var query=document.querySelector("#method");
    query.innerHTML="<em>Document object methods</em>";
    query.style.color="yellow"


    // document object model
    //attributes
         //url
         //head
         //links
         //textcontent
         //innerhtml
    //methodes
        //getelementbyid()
        //getelementsbytagname()
        //getelementsbyclassname()
        //queryselector()
        //qureyselectorall()