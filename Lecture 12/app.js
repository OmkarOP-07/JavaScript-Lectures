// async await >> promise chains >> callback hell

// synchronous programming :
// definition : In synchronous programming, the code is executed line by line, and each line waits for the previous one to finish before executing.
// console.log("start");
// console.log("end");

// asynchronous programming :
// definition : In asynchronous programming, the code is executed concurrently, and the execution of one line does not wait for the previous one to finish.

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);

// same as above
// setTimeout(() => {
//     console.log("hello from setTimeout");
// }, 3000);   


// how asynchronous programming works in JS
// console.log("one");
// console.log("two");


// setTimeout(() => {
//     console.log("hello");
// }, 4000);   

// console.log("three");
// console.log("four");

// callback hell :

function getData(data, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", data);
        if (getNextData)
            getNextData();
    }, 2000);
}

// getData(1);
// getData(2);
// getData(3);
// prints data immediately after 2s, but we want to print data in order after 2s each time, so we can use callback hell

// calllback hell :
// getData(1, () => {
//     console.log("waiting for data 2");
//     getData(2, () => {
//         console.log("waiting for data 3");
//         getData(3, () => {
//             console.log("waiting for data 4");
//             getData(4, () => {
//                 console.log("waiting for data 5");
//                 getData(5, () => {
//                     console.log("done");
//                 });
//             });
//         });
//     });
// });

// Promises 
// definition : A promise is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value. It allows you to write asynchronous code 
// in a more synchronous-like manner, making it easier to read and maintain.

//                          handlers
// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
// });

// promises states :
// 1. pending : initial state, neither fulfilled nor rejected.
// 2. fulfilled : meaning that the operation completed successfully.
// 3. rejected : meaning that the operation failed.

// let promise = new Promise((resolve, reject) => {
//     resolve("success");
//     reject("failure");
// });

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", data);
            resolve("success");
        }, 4000);
    });
}

// let promise = getData(1); log on console 

// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", data);
//             reject("failure");
//         }, 4000);
//     });
// }

// .then() : The then() method is used to specify what should happen when a promise is fulfilled.
// .catch() : The catch() method is used to specify what should happen when a promise is rejected.

// let promise = getData(1);
// promise.then((message) => {
//     console.log("message", message);
// })

// promise.catch((error) => {
//     console.log("error", error);
// });

function asyncFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", data);
            resolve("success");
        }, 4000);
    });
}

function asyncFunction2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", data);
            resolve("success");
        }, 4000);
    });
}
// parallel execution of promises :
// let promise = asyncFunction(123);
// console.log("fetching data 1 ...");

// let promise2 = asyncFunction2(456);
// console.log("fetching data 2 ...");

// sequential execution of promises :

// console.log("fetching data 1 ...");
// let p1 = asyncFunction(123);
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2 ...");
//     let p2 = asyncFunction2(456);
//     p2.then((res) => {
//         console.log(res);
//     })
// });

// asyncFunction(123).then((res) => {
//     console.log(res);
//     console.log("fetching data 2 ...");
//     asyncFunction2(456).then((res) => {
//         console.log(res);
//     })
// });

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// promise chaining :
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })


// async await :
// definition : The async and await keywords are used to write asynchronous code in a more synchronous-like manner. 
// The async keyword is used to define a function that returns a promise, and the await keyword is used to wait for the 
// promise to resolve before continuing with the execution of the code.

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data from api");
//             resolve("success");
//         }, 4000);
//     });
// }

// async function fetchData() {
//     console.log("fetching data ...");
//     let res = await api();
//     console.log(res);
// }

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    console.log("done");
}
