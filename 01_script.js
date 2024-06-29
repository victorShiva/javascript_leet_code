// write a function createHelloWorld. it returns a new function that alwas retuns "Hello World";

// function createHelloWorld() {
//     return function () {
//         return "Hello World"
//     }
// }
// let output = createHelloWorld();
// console.log(output());


// const createHelloWorld = () => () => "Hello World";
// const output = createHelloWorld();
// console.log(output());





///*****************  Given an integer n, return a counter function initialy return n and then return 1 more than the previous value every subsequent time it is called ( n , n + 1 , n + 2, etc);

// function createCounter(n) {
//     return function () {
//         return n++;
//     }
// }

// const counter = createCounter(10);
// console.log(counter());             //10
// console.log(counter());             //11
// console.log(counter());             //12




//***********************  Write a function expect that helps developer test their code. it should take any value val and return an object with the following two functions.

// i> toBe(val)    accepts another value and returns true if the two values === each other. if they are not equal, it should throw an error "Not Equal".
// ii> notToBe(val)  accepts another value and return true if the two values !== each other. if they are equal, it should throw an error "Equal".


// function expect(valOne) {
//     return {
//         toBe(valTwo) {
//             if (valOne === valTwo) return true
//             throw new Error("Not Equal");
//         },
//         notToBe(valTwo) {
//             if (valOne !== valTwo) return true
//             throw new Error("Equal");
//         }
//     }
// }

// let result = expect(5).notToBe(5);
// console.log(result);


// ************* Write a function createCounter. it should accept an initial integer init. it should return an object with three functions.
// i > increment() increases the current value by 1 and then return it.
// ii > decrement() reduce the current value by 1 and then return it.
// iii > reset() sets the current value to inti and then return it.


// function createCounter(init) {
//     let n = init;

//     function increment() {
//         return init += 1;
//     }
//     function decrement() {
//         return init -= 1;
//     }
//     function reset() {
//         return init = n;
//     }
//     return { increment, decrement, reset }
// }

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

// console.log(counter.reset());

// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.decrement());




// ******* Given an integer array arr and a mapping function fn , return a new array with a tranformation applied to each elements.

// i > the returned array should be created such that returndArray[i] = fn(arr[i] , i).
// please resolved it without the Array.map method.

// function newArray(arr) {
//     let createAray = [];
//     for (let i = 0; i < arr.length; i++) {
//         createAray.push(arr[i] + 1);
//     }
//     return createAray;
// }

// console.log(newArray([2, 3, 4, 5, 7]));



function map(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    return newArr;
}

// const plusOne = map([3, 4, 6, 8, 9, 1], (n) => n + 1);
// console.log(plusOne);





///************* Given an integer Array arr, and the filtering function fn, return a filtered array filteredArr.
/// fn function takes one or two aguments :
// > arr[i] - number from the arr
// > i - index of arr[i]

// function filter(arr, n) {
//     let filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > n) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// const newArr = filter([12, 3, 4, 65, 778, 3, 223], 30);
// console.log(newArr);


function filter(arr, fn) {
    let filteredArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr[j] = arr[i];
            j++;
        }
    }
    return filteredArr;
}

const newArr = filter([45, 34, 13, 15, 10, 20, 50, 30, 55, 11], (val, ind) => val > 30);
console.log(newArr);

