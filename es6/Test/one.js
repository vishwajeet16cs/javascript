const arr=[];
try{
    arr.push('try');
    throw new Error();
}catch(e){
    arr.push('catch');
}finally{
    arr.push('finaly')
}
console.log(arr)