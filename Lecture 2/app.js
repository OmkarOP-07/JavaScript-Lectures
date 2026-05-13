// Comments in JavaScript

// 1 Single line comment
// 2 Multi line Comments

/* 
Exmaple of multi line comment 
1 
2
*/

let a = 10;
let b = 20;

let c = a + b;
// console.log("a + b = "+ a + b); wrong output 

// Arithmetic Operators
console.log('a + b', a + b)
console.log('a + b', c)
console.log('a - b', a - b)
console.log('a*b', a*b)
console.log('a / b', a/b)

//unary operators 
a = a + 1
console.log(a)

console.log("post:", a++) // postincrement here a = 12
console.log(a)
console.log("pre:", ++a) // preincrement

// Assignment Operators

let x = 10;

console.log("Initial value:", x)

x += 5
console.log("x += 5 :", x)

x -= 2
console.log("x -= 2 :", x)

x *= 3
console.log("x *= 3 :", x)

x /= 2
console.log("x /= 2 :", x)

x %= 4
console.log("x %= 4 :", x)

x **= 2
console.log("x **= 2 :", x)


// Comparison Operators

let a1 = 10;
let b1 = 20;
let c1 = "10";

console.log("a1 == b1 :", a1 == b1)
console.log("a1 != b1 :", a1 != b1)

console.log("a1 == c1 :", a1 == c1) 
// checks only value

console.log("a1 === c1 :", a1 === c1) 
// checks value and datatype

console.log("a1 !== c1 :", a1 !== c1)

console.log("a1 > b1 :", a1 > b1)
console.log("a1 >= b1 :", a1 >= b1)

console.log("a1 < b1 :", a1 < b1)
console.log("a1 <= b1 :", a1 <= b1)


// Logical Operators
// 1 AND, 2 OR, 3 NOT

/*
c1|c2 : AND
t | t : t
t | f : f
f | t : f
f | f : f

c1|c2 : OR
t | t : t
t | f : t
f | t : t
f | f : f
*/

let age = 20;
let hasID = true;

console.log(
    "AND Operator:",
    (age >= 18) && (hasID == true)
)

let isRaining = false;
let temperature = 8;

console.log(
    "OR Operator:",
    (isRaining == true) || (temperature < 10)
)

let isEmpty = false;

console.log(
    "NOT Operator:",
    !(isEmpty == true)
)

// Conditional Statements
if (mode == "dark mode"){
	color = "black";
}

// if else
if (mode == "dark mode"){
    color = "black";
} else {
    color = "white";
}

// else if
if (mode == "dark mode"){
    color = "black";
} else if (mode == "light mode"){
    color = "white";
} else {
    color = "gray";
}
