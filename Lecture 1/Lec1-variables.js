// Variables in JavaScript  

let age = 20;
console.log(age);

//let age  = 20; gives error, cant redeclare a variable with let keyword

age = 21  // we can reassign a variable declared with let keyword

console.log("My current age is :"+age);  // we can use + operator to concatenate string and variable value in console.log
console.log("My current age is :",age);  // we can use comma to print variable value in console.log

// String concatenation
let fs = "Omkar";
let ls = "Potdar";

let fullname = fs + " " + ls;  // concatenating first name and last name with a space in between
console.log("My full name is :"+fullname);  // printing full name using concatenation

name = "Emma";
console.log("name"); 

let x = null
console.log(x);  // null is a special value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property does not exist.   

let y = undefined
console.log(y);  // undefined is a primitive value that is automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments. It indicates that a variable has not been assigned a value.


// CASE SENSITIVITY IN JAVASCRIPT
let a = 10;
let A = 20;

// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)

let my_name = "Jay"
let $myName = "Om"
// let my name2 = "Sai"  space not allowed

// reserved keywords cannot be used as variable names
// let let = 10;  // gives error, let is a reserved keyword in JavaScript

// Reserved words
// These keywords cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.
// break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield


/*
The four most widely used cases are:
camelCase: The first word is lowercase, and each subsequent word starts with a capital letter.
Example: myVariableName
Usage: Standard for variables and functions in Java, JavaScript, and C#.

PascalCase: Every word starts with a capital letter.
Example: MyClassName
Usage: Common for class names in Java, C#, and TypeScript.

snake_case: Words are lowercase and separated by underscores.
Example: my_variable_name
Usage: The standard for Python (PEP 8) and database field names.

kebab-case: Words are lowercase and separated by hyphens (dashes).
Example: my-element-id
*/

let b;
const c = 5;  // const variables must be initialized at the time of declaration

// const variables cannot be reassigned
const pi = 3.14; //
// pi = 3.14159;  // gives error, cannot reassign a const variable

// Block scope and function scope
function test() {
    let a = 10;
}
// console.log(a);  // gives error, a is not defined outside the function test

// Data types in JavaScript

// Primitive data types
let num = 42;  // number
let str = "Hello, World!";  // string
let bool = true;  // boolean
let undef;  // undefined
let nul = null;  // null

// Non-primitive data types
let obj = { 
    name: "Alice", 
    age: 30 
};  // object

let arr = [1, 2, 3, 4, 5];  // array    


