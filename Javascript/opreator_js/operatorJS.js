//arthmetic operation 
//addition operator
// Addition operator are of two type 
//1>addition 
//2>concatination

var a=10;
var b='20';
var c=15;
var d="abcd"; //containing string abcd
var sum1=a+b;//1020
var sum2=a+c;//25
var sum3=a+d;//10abcd
console.log(sum1);
console.log(sum2);
console.log(sum3);
//additional=>sum1
//additional=>sum2 and sum3

//-----------------------------------------------

// Multiplication
var m1=a*b;//200
var m2=a*c;//150
var m3=a*d;//NaN
console.log(m1);
console.log(m2);
console.log(m3);

//controle_flow=>two type
//1> conditional flow
//2> Iterative flow
/*if(condition)
{
	true statement
}
else
{
	false statement
}
*/
if(true)
{
	console.log("this is true statement");
}
else
{
	console.log("this is false statement");
}
//-------------
var age=30;
if(age<=30)
{
	console.log("this is true statement");// this statement weill be executed becauge age is 30 which is less then equql to 30
}
else
{
	console.log("this is false statement");
}
//---------------
if("ram")
{
	console.log("this is true statement");// will be executed
}
else
{
	console.log("this is false statement");
}
/* above code will print => this is true statement 
because "ram" is a string and it will contain some information
and java script is lossily type so it will consider as true */

//--------------------------------
// terneary operatore 
//syntex=>( condition ? statement1:statement2 )
// similar like if else statement
var age1=50;

age1<=30 ? console.log("less then 30"):console.log("more then 30")

//---------------------------------------------------------
var num=1234;
 while(num!=0)  
   {  
       num=num%10;  
        
   }  
   console.log(num);

 

 