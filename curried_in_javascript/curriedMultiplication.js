function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

var sum = multiply(4, 3); // Returns 12

var  sum1= curriedMultiply(4)(3); // Also returns 12
console.log(sum,"---",sum1);