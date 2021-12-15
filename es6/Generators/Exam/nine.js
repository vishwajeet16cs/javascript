const f=n=>n<=1?1:n*f(n-1);
let g =f(4);
console.log(g)