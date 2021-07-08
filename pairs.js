var arr=[1,2,3,4]
var low=0
var upp=arr.length-1
var res=6;
// for(let i of arr){
//     for(let j of arr)
//     {
//         if(res==(i+j)){
//             console.log(res);
//         }
//     }
// }
while(low<=upp)
{
    let sum=arr[low]+arr[upp];
    if(res==sum){
        console.log(arr[low],arr[upp]);
        break;
    }
    else if(res>sum){
        low++;
    }
    else if(res<sum){
        upp--;
    }
}