//---1> to check no is divisible by seven or not
// INMP-NOTES=> mod well be used because it check remainder
//mode(%) or div(/) => mode 
console.log("<1> to check no is divisible by seven or not--");
var a=21;
if(a%7==0)
{
	console.log("Divisible by seven");
}
else
{
	console.log(" not Divisible by seven");
}



//---2>to check number is multiple by three or not
console.log("<2>to check number is multiple by three or not---");
var a1=12;
if(a1%3==0)
{
	console.log("Multiple by three");
}
else
{
	console.log(" not Multiple by three");
}


//---4>check a number is having 4 at unit's place or not-----
console.log("<4>check a number is having 4 at unit's place or not");
var a2=14;
if(a2%10==4)
{
	console.log(" four is there is at unit place");
}
else
{
	console.log(" four is not there at unit place ");
}

//---5>write the code to check the number is three digite number or not-----
console.log("<5>write the code to check the number is three digite number or not-----");
var num=6392;

if(num>=100&&num<=999)
{
	console.log("give number is three digite");
}
else
{
	console.log(" given number is not three digite");
}

//---6>to check number is even or odd ----
console.log("<6>to check number is even or odd ----");
var num1=53;

if(num1%2==0)
{
	console.log("given number is even number");
}
else
{
	console.log(" given number is odd number");
}
//-----6>
var a=24;
for(var i=1;i<=24;i++)
{
	if(a/i==0)
	{
			console.log(i);
	}
}
//----7>grater number in given two number ---
console.log("---7>grater number in given two number ---");
var numa=23;
var numb=32;

if(numa>numb)
{
	console.log(numa +"is grater");
}
else
{
	console.log(numb +"is grater");
}
//-----8>least number in given two number ---
console.log("-----8>least number in given two number ---");
var numaa=23;
var numbb=32;

if(numaa<numbb)
{
	console.log(numaa +"is least");
}
else
{
	console.log(numbb +"is least");
}
//-----9>grater number in given two number ---
//logic one
console.log("---logic no 1. to find grater among three number---");
var numaa=3;
var numbb=2;
var numcc=1;
if(numaa>=numbb && numaa>=numcc)
{
	console.log(numaa +" numaa is grater among all three");
}
if(numbb>=numaa && numbb>=numcc)
{
	console.log(numbb +" numbb is grater among all three");
}	
if(numcc>=numaa && num>=numcc)
{
	console.log(numcc +" numaa is grater among all three");
}
//logic two
console.log("--- logic no 2 to find grater among three number---");
if(numaa>=numbb)
{
	if(numaa>=numcc)
	{
		console.log(numaa +"numaa is grater");
	}
	else
	{
		console.log(numbb +"numbb is grater");
	}
}
else
{
	if(numbb>=numcc)
	{
		console(numbb +"numbb is grater");
	}
	else
	{
		console(numcc +"numcc is grater");
	}
}
// 10 is similar to above question


// 11 in given three number arrange in ascending order 
var numa1=160;
var numb1=20;
var numc1=370;
if( numa1>=numb1)
{
	if(numa1>=numc1 && numb1>=numc1)
	{
		console.log(numc1 ,numb1, numa1);
	}
	else
	{
		console.log(numb1, numc1, numa1);
	}
}
else if(numa1<=numb1)
{
	if(numb1>numc1 && numa1>numc1)
	{
		console.log(numc1, numa1, numb1);
	}
	else
	{
		console.log(numa1, numb1, numc1);
	}
	
}

// 12 is similar to 11
var numa1=160;
var numb1=290;
var numc1=3870;
if(numa1>=numb1 && numb1>=numc1)
{
	console.log(numa1,numb1,numc1)
}
else if(numb1>=numc1 && numc1>=numa1)
{
	console.log(numb1,numc1,numa1);
}	
else
{
	console.log(numc1,numa1,numb1)
}
