// let arr=[{emp_name:"prativa",emp_id:1},{emp_name:"rani",emp_id:2},{emp_name:"amrita",emp_id:3},{emp_name:"prativa",emp_id:1}]
// console.log(arr);
// finaldata=[... new Set(arr)];
// let finaldata=arr.filter((ele,pos)=>{
/*     return arr.indexOf(pos)==ele
})
console.log("ARRAY CHECK"+finaldata); */
/* let j=0;
for(let i=0;i<arr.length;i++){
    
    if(arr[j]==arr[i]){
        arr.pop()
        j++;
        break
    }
}
console.log("final dara re\move",arr); */
// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = arr.filter((c, index) => {
//     // console.log(arr[index].emp_name)
//     console.log(index)
//     return arr.indexOf(c) === index;
// });

// console.log(uniqueChars);
const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]

const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => {
    return !ids.includes(id, index + 1)
})

console.log(filtered)