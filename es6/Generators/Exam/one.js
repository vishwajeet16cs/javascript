function map(array,method){
    let resultArray=[]
    array.forEach(element=>{
        const value=method(element)
        resultArray.push(value)
    })
    return resultArray
}
console.log()