// incomplit work 
console.log("Post api");
function postData(){
    console.log("in side postdata function")
    url="https://dummy.restapiexample.com/api/v1/create";
    data={"name":"helojdhd9229299","salary":"123","age":"23"}
    params={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:data
    }
    console.log("before fatching the data")
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(data))
    console.log("after fatching the data")
    // console.log()
}
console.log("before calling post api")
postData();
console.log("after calling post api")