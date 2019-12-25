//1) Define Abstraction ? Implement Abstraction in JS with a working code example.

//hiding irrelevant details from users and only allowing them to use the funtionalities

 
	
//2) Define Inheritance? Implement Inheritance in JS with a working code example.
//Inheritance is the ability to create a child of any class. That child inherits all properties of its parent  can inherit these peroperties to its children.
//Person has two children: Employee and Students 
	
function Person(firstName, lastName) {
    this.FirstName = firstName;
    this.LastName = lastName;
};

function Employee(firstName, lastName, salary)
{
    Person.call(this, firstName, lastName);

    this.salary = salary;
}

function Student(firstName, lastName, gpa)
{
    Person.call(this, firstName, lastName);

    this.gpa = gpa;
}
var person1= new Person("ulfat","dawood");
var student1= new Student("Mike","smith",3.5)


//3) Define Polymorphism? Implement Polymorphism in JS with a working code example.

//when any vlaue could be any of many types:

function Instructor(firstName, lastName, salary, degree)
{
    Employee.call(this, firstName, lastName,salary, degree);

    this.degree = degree;
}
var instructor1 = new Instructor("jim", "robert", 3.3, 'PhD');
//instructor1 can be Instructor, Employee, Person or Object:

console.log(instructor1 instanceof Instructor);
console.log(instructor1 instanceof Employee);
console.log(instructor1 instanceof Person);
console.log(instructor1 instanceof Object);


//4) Define Encapsulation ? Implement Encapsulation in JS with a working code example

//when objects or funtion prototypes have some values that are private to them and can't be accessed. 
//can be achived by using symboles or dropping "this" keyword 

function Volunteer(firstName, lastName) {
    FirstName = Symbol('firstName');
    LastName = lastName;
};