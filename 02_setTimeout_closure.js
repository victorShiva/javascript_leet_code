// function x() {
//     let i = 10;
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
//     console.log("Hello sir");
// }
// x();        //10                  //create closure


// function x() {
//     let i = 10;
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     console.log("Hello sir");
// }
// x();        //10                     //create closure




// function x() {
//     for (var i = 0; i < 6; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 2000);
//     }
//     console.log("Hello sir");
// }
// x();


// function x() {
//     for (var i = 0; i < 6; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, 2000);
//         }
//         close(i);
//     }
//     console.log("Hello sir");
// }
// x();




// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// const increment1 = counter();
// increment1();
// increment1();
// increment1();

// const increment2 = counter();
// increment2();
// increment2();
// increment2();





//**************** using constructor function

// function Counter() {
//     let count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     },
//         this.decrementCounter = function () {
//             count--;
//             console.log(count);
//         }
// }

// let Counter1 = new Counter();
// console.log(Counter1);
// Counter1.incrementCounter();
// Counter1.incrementCounter();
// Counter1.incrementCounter();

// Counter1.decrementCounter();
// Counter1.decrementCounter();





