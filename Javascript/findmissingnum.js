// let arr=[1,2,3,4,5,7,8,9,10];
// with temp variable
/* let j=1;
for(let i=0;i<arr.length;i++){
    
    if(arr[i]!=j){
        console.log(j);
        break
    }
    j++;
} */
// without temp variable
// for(let i=0;i<arr.length;i++){
  
//     if(arr[i]+1!=arr[i+1]){
//         console.log(arr[i]+1);
//         break;
//     }
// }
//div and search
let arr=[1,2,3,4,5,7,8,9,10];

function search(low,high){
    // console.log("check")
    for(let i=low; i<high;i++){
        if(arr[i]+1!=arr[i+1]){
                    console.log(arr[i]+1);
                    break;
                }
    }
}
for(i=0;i<=arr.length;i++){

}
function div(){
    let low=0;
    let mid=arr.length/2;
    let high=arr.length;
    search(low,mid);
    search(mid+1,high);
    
}
div();