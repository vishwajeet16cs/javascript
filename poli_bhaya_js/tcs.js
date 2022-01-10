let data="1 apple 2 people 46"
let arrdata=[...data]
console.log(arrdata)
var count = 0;
var spaceCount = (data.split(" ").length - 1);
for(let i=0;i<arrdata.length;i++){
    if(!isNaN(arrdata[i])){
        // if(!isNaN(arrdata[i]&&!isNaN(arrdata[i+1])))
        // break
        count =count+1
    }
}
console.log(count-spaceCount)
// if(data.indexOf(' ')){
//     console.log();
// }

// var my_string = "John Doe's iPhone6";
// var spaceCount = (my_string.split(" ").length - 1);
// console.log(spaceCount)