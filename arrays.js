//[] we can store both same and different types of objects,updation possible,order preserved
// to find a common element 
var array=[10,20,30,40]
vvar array=[10,20,3,4]
var pos1=0
var pos2=0
while(pos1<=pos2){
    let sum=arr[low]+arr[upp];
    if(array1[pos1]==array2[pos2]){
        console.log(array[pos1]);
        pos1++;
        pos2++;
    }
    else if(array1[pos1]<array2[pos2]){
        pos1++;
    }
    else if(array1[pos1]>array2[pos2]){
        pos2++;
    }
}

