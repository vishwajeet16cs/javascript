let emp ={
	name: "vishwajeet",
	roll: 123,
	clas:10,
	email: "vishwajeetkumarb438@gmail.com",
	add:()=>// we can't use normal function in object 
	{
		
		return "add num";
	}
};
console.log(emp);
/*{
	output:-console.log(emp); //before update 
  name: 'vishwajeet',
  roll: 123,
  clas: 10,
  email: 'vishwajeetkumarb438@gmail.com',
  add: [Function: add]
}*/

console.log(emp.add());//add num
emp.lastname="singh";// update last name in object emp
console.log(emp);
/*
output:-console.log(emp);
{
  name: 'vishwajeet',
  roll: 123,
  clas: 10,
  email: 'vishwajeetkumarb438@gmail.com',
  add: [Function: add],
  lastname: 'singh'
}*/