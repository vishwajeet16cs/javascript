// let x=['1','2','15','-7','300']
// let y= x.sort()
// console.log(y)
//--------------------
// const promises=[3,2,1].map(d=>(
//     new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(d)
//         },d*1000)
//     })
// ))
// Promise.race(promises).then((val)=>{
//     console.log(val)
// })

///----------------------------------
// function func(a,b){
//     a+=1
//     b.push(1)
// }
// const a=0;
// const b=[]
// func(a,b)
// console.log(a,b)

//-------------------------------------
// function deletedata(items){
//     for(var i=0;i<items.length;i++){
//         let a=items.splice(i,1);
//         console.log(a)
//     }
// }
// var names=["r","s","m","s","s","t"];
// let res=deletedata(names)
// console.log(res)
//--------------------
// const f=n=>n<=1?1:n*f(n-1);
// let g=f(4);
// console.log(g)

//-----------
// let words=["Hello","World"]
// let newarr=words.forEach((word,i)=>{
//     (words[i]=word.split(' ').reverse().join('')).toLowerCase()
// })
// console.log(newarr)

//-----------
function hasPos(array){
    let haspos=false;
    let hasnag=false;
    array.forEach(num=>{
        haspos=num>0
        hasnag=num<0
    })
    return [hasPos,hasnag]
}
console.log(hasPos([]))//true-0,-1,`-2
// array=[true,false]
// let data =hasPos(array)
// console.log(data)
//----------------------------------
 

//-----------------------
// function build(senten){
//     let root={}
//     senten.forEach(senten=>{
//         let base =root;
//         senten,split('')
//     })
// }
//-------------------------------
