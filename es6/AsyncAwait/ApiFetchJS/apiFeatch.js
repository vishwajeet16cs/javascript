console.log("api fetch")
function getData(){
    console.log("inside getData")
    let url="https://api.github.com/users";
    fetch(url).then((responce)=>{
        console.log("inside 2nd then ")
            return responce.json();
    }).then((data)=>{
        console.log("inside 2nd then ")
        console.log(data)
    })
}
console.log("before fetching data");
getData();
console.log("after calling getData");