function myFun(msg) {
    //parameter
    console.log(msg)
}

//call

myFun() // undefined 

myFun("asdjasfd") //argument

function add(n1, n2) {
    console.log("sum of given no is", n1 + n2)
}

// return value from function 

function muliply(n1, n2) {
    // local variables --> block scope
    console.log("before return")
    return n1 * n2;
    console.log("after return");  //unreachable code
}

// console.log(n1)  // error 

let ans = muliply(2, 3)
console.log(ans);

// modern javascript
// arrow function 
const arrowFun = (num1, num2) => {
    console.log(num1 + num2);
}

// for each loop

let arr = [1, 2, 3, 4, 5]

arr.forEach((val) => console.log(val))

arr.forEach(
    function printval(val) {
        console.log(val)
    }
)

arr.forEach((val, idx, arr) => {
    console.log("value :", val, "indices are", idx, arr)
})

//printing square of each value using for-each loop

// let calSquare = (val) => {
//     console.log(val * val)
// }

// arr.forEach(calSquare)

//map method

// arr.map((val) => {
//     console.log(val*val)
// })

let arr2 = arr.map((val) => {
    return val*val;
})


//filter
let arr3 = arr.filter(
    (val) => {
        return val%2 === 0
    }
)

// reduce 

let answers = arr.reduce(
    (curr, next) => {
        return curr + next
    }
)

// return greatest elemnt

let greatest = arr.reduce(
    (curr, next) => {
       return curr > next ? curr : next
    }
)