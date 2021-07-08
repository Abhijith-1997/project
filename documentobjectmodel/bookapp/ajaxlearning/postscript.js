var request=new XMLHttpRequest()
request.open("get","https://jsonplaceholder.typicode.com/posts")
request.send()
request.onreadystatechange=()=>{
    if(request.readystate==4){
        if(request.status>199 &request.status<300){
            let posts=JSON.parse(request.responseText)
            console.log("posts");

        } 
        else{
            console.log("failed");
        }
    }
}