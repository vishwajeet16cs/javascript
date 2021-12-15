function hasPosNeg(array){
    let hasPos=false
    let hasNeg=false

    array.forEach(num=>{
        hasPos=mum>0
        hasNeg=num<0
    })
    return [hasPos,hasNeg]
}
// let a=[-1,0,1]
// let b=[0,1,2]
let c=[0,-1,-2]
console.log(hasPosNeg(c));