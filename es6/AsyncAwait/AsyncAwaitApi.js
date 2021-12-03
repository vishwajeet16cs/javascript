console.log("AsyncAwait  tutorial");
async function vishwa(){
    console.log("Inside harry function");
    const responce= await fetch ("https://api.github.com/users");
    console.log("beffor responce");
    const users= await responce.json();
    console.log("user resolve")
    return users;


    // return "vishwa";
}
//below concole to check flow of execution
console.log("Before calling function")
let a=vishwa();
console.log("After calling function");
// console.log(a);
a.then(data=>console.log(data))
console.log("Last line of this js file")