// "use strict";


// * This in global space
console.log(this);                        //globalObject - window(browser) , global{}(nodejs)



// --------------------------------------------------------------------------------------------------------



// * this keyword inside a function
function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}
x();

/*
# this keyword works be differently in strict mode and non-strict mode.

* this keyword in non strict mode -(this substitution)
if thevalue of this keywordis undefinedor null.
this keyword will be replace with globalObject.
only in non strict mode.
*/


// ------------------------------------------------------------------------------------------------------


// this keyword value depends on how the function is called (window)

function greet() {
    console.log(this);               // windowObject (non-strict)   // undefined(strict)      
}
greet();

window.x()   // windowObject (strict and non-strict mode)



//   -------------------------------------------------------------------------------------

//this keyword inside object's method
/*
const info = {
    a: 10,
    x: function () {
        console.log(this);              //{a: 10, x: ƒ}
        console.log(this.a);            // 10
    }
}
info.x();                              // this is refer to info object

*/

/*
const info = {
    a: 10,
    x: function () {
        console.log(this);              // window Object
    }
}
const fun = info.x;
fun();
*/

//  ------------------------------------------------------------------------------------
//  call , apply , bind methods (sharing method)

const student = {
    name: "Raghav",
    printName: function () {
        console.log(this);
        console.log(this.name);
    }
}
// student.printName();

const student2 = {
    name: "Deepika"
}

student.printName.call(student2);


//  -----------------------------------------------------------------------------------------------
// * this inside arrow function

// const obj = {
//     a: 10,
//     x: () => {
//         console.log(this);              // window Object
//     }
// }
// obj.x();

/*
when this weyword inside arrow function the this value of enclosing lexical context.
*/

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);          // {a: 20, x: ƒ}
        }
        y();
    }
};
obj2.x();
// the value of this keyword will be where this arrow function is lexicaly enclose.