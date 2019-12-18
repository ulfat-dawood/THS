function Person(first, last, age, gender, interests) {
    this.firstname= first;
    this.lastname= last;
    this.age= age;
    this.gender;
    this.interests;
    this.bio= function(){
        console.log(this.firstname+this.lastname+this.age+this.gender);
    }
}

Person.prototype.hobby =()=>{
    console.log(this.interests +"I can access all properties");
}
Person.prototype.setAge=(age)=>{
    this.age=age; 
}
//_____________________________________________
function Instructor(first, last, age, gender, interests,){

}