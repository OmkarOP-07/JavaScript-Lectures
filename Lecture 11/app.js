// Classes & Objects in JavaScript

// Object = collection of properties and methods

let student = {
    fullName: "Omkar",
    marks: 90,

    printMarks() {
        console.log("Marks =", this.marks);
    }
};

student.printMarks();

// this keyword
// Refers to current object

console.log(student.fullName);


// Prototype

// Every object has a prototype
// Prototype allows one object to use properties and methods of another object

let employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

let omkar = {
    salary: 50000
};

// Setting prototype

omkar.__proto__ = employee;

omkar.calcTax();

// If object and prototype both have same method
// Object's method gets higher priority

let employee2 = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

let karan = {
    salary: 60000,

    calcTax() {
        console.log("Tax rate is 20%");
    }
};

karan.__proto__ = employee2;

karan.calcTax();

// Class

// Class is a program-code template for creating objects

class Car {
    constructor(){
        console.log("Obj is created")
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}


// Creating object from class

let fortuner = new Car();

fortuner.setBrand("Fortuner");

fortuner.start();

console.log(fortuner.brand);


// Constructor

// Constructor is a special method
// Automatically invoked when object is created

class Student {

    constructor(name, age) {

        console.log("Creating new object");

        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name, "is studying");
    }
}

let s1 = new Student("Omkar", 21);

console.log(s1.name);

s1.study();


// Another Constructor Example

class newCar {

    constructor(brand, mileage) {

        this.brand = brand;
        this.mileage = mileage;
    }

    displayInfo() {
        console.log(this.brand, this.mileage);
    }
}

let car1 = new newCar("Toyota", 15);

car1.displayInfo();


// Inheritance

// Inheritance allows child class to use
// properties and methods of parent class

class Parent {

    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {

}

let obj = new Child();

obj.hello();


// Real Life Example

class Person {

    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
}

class Engineer extends Person {

    work() {
        console.log("Solve Problems");
    }
}

let engObj = new Engineer();

engObj.eat();

engObj.work();


// Method Overriding

// If parent and child both have same method
// Child method overrides parent method

class Person1 {

    work() {
        console.log("Do some work");
    }
}

class Engineer1 extends Person1 {

    work() {
        console.log("Build Software");
    }
}

let e1 = new Engineer1();

e1.work();


// super keyword

// Used to access parent class properties and methods

class Person2 {

    eat() {
        console.log("Eating");
    }
}

class Engineer2 extends Person2 {

    work() {

        super.eat();

        console.log("Coding");
    }
}

let e2 = new Engineer2();

e2.work();


// super with constructor

class Person3 {

    constructor(name) {

        this.name = name;
    }
}

class Engineer3 extends Person3 {

    constructor(name) {

        super(name);

        this.profession = "Engineer";
    }
}

let engineer = new Engineer3("Omkar");

console.log(engineer.name);

console.log(engineer.profession);


// Practice Example

let DATA = "Secret Data";

class User {

    constructor(name, email) {

        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(DATA);
    }
}

class Admin extends User {

    editData() {
        DATA = "Some New Value";
    }
}

let user1 = new User("Omkar", "omkar@gmail.com");

let admin1 = new Admin("Admin", "admin@gmail.com");

user1.viewData();

admin1.editData();

user1.viewData();


// Quick Notes

// Object -> Collection of properties and methods

// Prototype -> Extra object from which another object inherits properties and methods

// Class -> Blueprint for creating objects

// Object -> Instance of class

// Constructor -> Special method automatically called when object is created

// Inheritance -> Child class gets access to parent class properties and methods

// Method Overriding -> Child method replaces parent method

// super -> Used to call parent constructor and methods

// extends -> Used to inherit a class