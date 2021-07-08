var pattern="abbc";
var dict={};
for( let char of pattern){
    if( char in dict){
        console.log("first recursive character is"+char);
    }
    else{
        dict[char]=1; 
    }
}