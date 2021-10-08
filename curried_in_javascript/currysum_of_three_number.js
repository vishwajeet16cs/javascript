/*function add(a,b,c)
{
	return a+b+c;
}
 function curryingsum(fn)
 {
	 return function(a){
		 return function(b){
			return function (c){
				return fn(a,b,c);
			}
		 }
	 }
 }
 var add1=add(1,2,3);
 console.log(add1);
 var cadd=curryingsum(add);
 var add1=cadd(1)(2)(3);
 console.log(add1);*/
 
 
 
 
 function add(a,b,c )
 {
	 return a+b+c;
 }
 function curryadd(fn)
 {
	 return function(a){
		 return function(b,c){
			 return fn(a,b,c);
		 }
	 }
 }
 var add1=add(1,2,3);
 console.log(add1);
 var store_curry =curryadd(add);
 var add2 = store_curry(1)(2,3);
 console.log(add2);