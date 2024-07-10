/*

    # What is async ?                                   -->   Async function always return a promise .
    # What is await ?                                   -->   Await is a keyword that can only be used inside a function, and write await keyword in front of a promise and it resolves the promise.
    # How async await works behind the scenes ?         -->
    # Example of using async / await .
    # Error Handling.
    # Interviews.
    # Async await  vs Promise.then /.catch

*/

// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved data!");
// });

// async function getData() {
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);                                       //Promise {<pending>}

// dataPromise.then(res => console.log(res));                      //Promise resolved data!







// * **********           Async function always return a promise .




// async function getData() {
//     return "Hey Shiva !";
// }

// const dataPromise = getData();
// console.log(dataPromise);                                  //Promise {<fulfilled>: 'Hey Shiva !'}

// dataPromise.then(res => console.log(res));                  // Hey Shiva!







//                   ----------------- using await with async ---------------------

//  # async await combo is used to handle promises .

// ---> before

/*
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved data!");
});

function getData() {
    p.then(res => console.log(res));
}
getData();

*/


//   ----> After

/*
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved data!");
});

async function handlePromise() {
    const val = await p;
    console.log(val);
}
handlePromise();
*/




//                    *********************** Diving deep into async / await     ****************************




/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data!");
    }, 5000)
});

function handlePromise() {
    //  // JS Engine will not wait for promise to be resolved
    p.then(res => console.log(res));
    console.log("Hey this is promise resolve!");
}
handlePromise();
*/


/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data!");
    }, 5000)
});

async function handlePromise() {
    // // JS Engine was waiting for promise to resolved
    const val = await p;
    console.log(val);
    console.log("Hey this is  promise resolve!");
}

handlePromise();
*/


/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data!");
    }, 5000)
});

async function handlePromise() {
    // // JS Engine was waiting for promise to resolved
    const val = await p;
    console.log(val);
    console.log("Hey this is  promise resolve!");

    const val2 = await p;
    console.log(val2);
    console.log("Hey this is  promise resolve! 2");                     // after 10 second val , val2 is printed

}
handlePromise();
*/


/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data!");
    }, 10000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data!");
    }, 5000)
});

async function handlePromise() {
    // // JS Engine was waiting for promise to resolved
    const val1 = await p1;
    console.log(val1);
    console.log("Hey this is  promise resolve!");

    const val2 = await p2;
    console.log(val2);
    console.log("Hey this is  promise resolve! 2");
}
handlePromise();

*/



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved data!");
//     }, 5000)
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved data!");
//     }, 10000)
// });

// async function handlePromise() {
//     // // JS Engine was waiting for promise to resolved
//     const val1 = await p1;                                  // handlePromise() suspended from the call stack for the 5s
//     console.log(val1);
//     console.log("Hey this is  promise resolve!");

//     const val2 = await p2;
//     console.log(val2);
//     console.log("Hey this is  promise resolve! 2");
// }
// handlePromise();


//                              --------------------- fetch() ------------------------

/*
const API_URL = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {

    const data = await fetch(API_URL);              // fetch is a promise , which is return response object (readable promise object) and when this promise is resolved it give the results.

    const jsonValue = await data.json();

    console.log(jsonValue);

    // fetch() ==> Response.json() ==> jsonValue.
}

handlePromise();
*/




// const API_URL = "https://randominvalidurl";

// async function handlePromise() {
//     try {
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue);

//     } catch (error) {
//         console.log(error);
//     }
// }
// handlePromise();





const API_URL = "https://randominvalidurl";

async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

handlePromise().catch(err => console.log(err));
