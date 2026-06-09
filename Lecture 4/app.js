// Array is a collection of items 
// [  ,   ,   ,   ,   ]

let heights = [4.2,5.2,4.1,6.7];
let players = ["virat", "rohit", "sachin", "shreyash", "rajat"]

console.log(heights)
console.log(heights.length)  // property of array

// type of array - objects
console.log(typeof(heights))


let arr = [1,2,3,5]

// indices of array 
// arr[0], arr[1], arr[2], arr[3]


// change value of array 
arr[3] = 12

// strings are immutable, arrays are mutable 
let str = "virat"
str[2] = "o"
console.log(str)


//looping in array
// for, for-of, for-in

for(let player of players){
    console.log(player)
}

//Q apply 5% off on all items in array

let prices = [100,200,300,250,150];

let idx = 0;
for(let itemPrice of prices){
    let temp = itemPrice - (itemPrice*5)/100;
    itemPrice = temp;
    idx++
}

for(let price of prices){
    console.log(price)
}

//methods of arrays
//1 push     : add to end
//2 pop      : delete from end & return
//3 toString : converts array to string
//4 concat   : joins multiple arrays & returns result
//5 Unshift  : add to start
//6 shift    : delete from start & return
//7 Slice    : returns a piece of the array
//8 splice   : change original array
//             splice( startIdx, delCount, newEl1... )

players.push("rishabh")
players.pop()

for(let player of players){
    console.log(player)
} 

players.toString()

prices.splice(4,5,900)
for(let price of prices){
    console.log(price)
}

console.log(players.slice(1,3))
