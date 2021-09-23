class student{
	name="vishwajeet";
	roll=129;
	constructor(lname,mname) // constructor
	{
		this.last_name=lname;
		this.mid_name=mname;
		console.log("this is a constructor which execute only once\n");
	}
	add(){
		//console.log("this is a function");
		return " add function ----hello \n";// without return type it is not working throwing error
		//console.log("this is a function");
	}
	sub(){
		console.log("first name:",this.name);// not to write this.key --- this.value
	}
}
//console.log(new student);
let x=new student("singh","kumar");
console.log(x);
//console.log(new student("singh","kumar"));// we can't use clg(x("singh","kumar"))--TypeError: x is not a function
//console.log(new student("ram","kumar"));
console.log(x.add());
console.log(x.last_name);

x.sub();
// sub can't be call alone like->[-sub()--] need [--x.sub()---]
//object.method_name();


//console.log(x.addone()); //-- error
// because addone() is a method and it is not define in class
