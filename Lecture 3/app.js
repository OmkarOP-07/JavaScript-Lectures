// Loops 

// 1 for Loop

// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")

//initialize  stopping  updation
//            condition 
for(let i = 0; i < 10; i++){
    console.log("hello")
}

// sum of 1 to n numbers 
let n = 10;
let sum = 0; // we will get Nan if not initialized first

for(let i = 1;i <= n; i++){
    sum = sum + i;         // think how to shorten this
}
// console.log(i) // block scope error

console.log(`sum of 1 to ${n} is :`,sum);

// while Loop
let j = 1
while(j < 4){
    console.log(j);
    j++;   // post increment operator
}
console.log("value of j is ",j)

// do-while Loop
let m = 1;
do {
   console.log("Hey there")
   m++
} while(m < 5);

// for of Loop
str = "Vande Mataram";
for(let i of str){
    console.log(i)
}

// calc size of str
let len = 0;
for(let i of str){
    len++
}
console.log(len)

// for-in Loop
let student = {
    name : "Jay Shah",
    age : 22,
    cgpa : 9.2,
    isPass : true
}
for(let i in student){
    console.log("key is :", i, "& value is :", student[i])
}

// Q Find the sum of all numbers from 1 to 100 that are divisible by both 3 and 5

// print this pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Strings in JS
// Strigns is a sequence of characters used to represent text

let str1 = "Sarvarth";
// string length
console.log(str1.length);
// string indices
console.log(str1[0],str1[1],str1[2])

// template laterals // back tecs
// string interpolation
// placeholder ${expression}
let sentence = `student name is ${student.name}, He is a good student and he is just ${student.age}. He has CGPA of ${student.cgpa}. Is he pass ? ${student.isPass}`

console.log(sentence)
let sentence2 = "hello \nworld"
console.log(sentence2) // \n is used for new line
console.log(sentence2.length) // length of string includes \n as well
console.log("hello \tworld") // \t is used for tab space

// String Methods in JS
// 1. toUpperCase() 
// 2. toLowerCase()
// 3. trim()
// 4. slice()
// 5. concat()
// 6. replace()
// 7. charAt()


let name1 = "Jay Shah";
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())

//3. trim()
let name2 = "   Jay Shah   ";
console.log(name2.trim()) // removes white spaces from both sides of string
// console.log(name2.trimStart()) // removes white spaces from start of string
// console.log(name2.trimEnd()) // removes white spaces from end of string

// 4. slice() and 5. substring()
let name3 = "Jay Shah";
console.log(name3.slice(0,3)) // start index is inclusive and end index is exclusive
console.log(name3.slice(4)) // if end index is not provided then it will slice till the end of string
console.log(name3.substring(0,3)) // similar to slice but doesn't support negative indices

// 5. concat()
let str3 = "Hello";
let str4 = "World";
console.log(str3.concat(" ",str4)) // concatenates str3 and str4 with a space in between

// 6. replace()
let str2 = "I am a good student. I am learning JS. JS is a great language.";
console.log(str2.replace("JS","JavaScript")) // replaces the first occurrence of "JS" with "JavaScript"

// 7. charAt()
console.log(name3.charAt(0)) // returns the character at the specified index

// original string is immutable in JS, string methods return a new string and do not modify the original string
let a = "hello";
a[0] = "H"; // this will not change the original string
console.log(a) // still "hello" not "Hello"

/*
1. Email Generator

👉 Take user’s full name and generate email like:

lowercase
remove spaces
add @gmail.com

Example:

Input: "Omkar Potdar"
Output: omkarpotdar@gmail.com

2. Password Validator

👉 Take a password as input and validate it based on the following criteria:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character
Example:

Input: "Password123!"
Output: Valid
*/