function findFirstPositiom(arr,fn){
    let pos=false;
    for(let i=0;i<arr.length;i++){
        let row=arr[i];
        for(let j=0;j<row.length;j++){
            if(fn(row[j])){
                pos=[i,j];
                break;
            }
        }
    }
    return pos;
}
console.log()