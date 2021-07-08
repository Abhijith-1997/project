var arr=[1,3,2,4,5,7,6]
arr.sort((i,j)=>i-j)
var low=0,upp=arr.length-1,flag=0;
var element=10;
while(low<upp){
    let mid=Math.floor((low+upp)/2)
     if(element>arr[mid]){
        low=mid+1;
     }
     else if(element<arr[mid]){
         upp=mid-1;
     }
     else if(element==arr[mid]){
         console.log("element");
     }

}
if(flag==0){
    console.log("element not found");
}
else{
    console.log(" found");
}
