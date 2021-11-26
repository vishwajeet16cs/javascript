class emp{
    name="ram";
    roll=101;
    add(){
        return "hello";
    }

}
class empall extends emp{
    lastname="kumar";
    city="patna";
}

class empallall extends emp{
    midname="singh";
    loc="blr"
}
let c= new empallall();
console.log(c.add());