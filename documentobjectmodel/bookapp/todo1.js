var book=[
    {
      "userId": 1,
      
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 2,
      
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
     
      "title": "fugiat veniam minus",
      "completed": false
    }
]
function createWork(){
    alert("open")
}
function createWork(){
    let userid=u_id.value;
    let title=t_id.value;
    let completed=c_id.value;
    let work={
        userid,title,completed
    }
    localStorage.setItem(userid,JSON.stringify(work))
}
function displayWork(work){
    let html_data=`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${work.userid}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${work.title}</li>
      <li class="list-group-item">${work.completed}</li>
      
    </ul>
  </div>`
 result.innerHTML=html_data

}
function findWork(){
    let userid=s_id.value;
    console.log("userid");
    let work=JSON.parse(localStorage.getItem(userid))
    if(work){
        displayWork(work)
    }
    else{
        console.log("failed");
    }
}
function listAll(){
    alert("works")
    let works=[];
    for(let i=0;i<localStorage.length;i++){
    works.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}
console.log("works");
let html_data=""
for(let work of works){
    html_data+=`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${work.userid}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${work.title}</li>
      <li class="list-group-item">${work.completed}</li>
      
    </ul>
  </div>`
}
  result.innerHTML=html_data
}
