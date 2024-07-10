

// ******** promise is an object which represent a evantual completion of asynchronous operation.






/*
const cart = ["shoes", "shirts", "pants", "shorts"];

const promise = createOrder(cart);
console.log(promise);                           //Promise { '23445' }
promise.then(function (orderId) {
    console.log(orderId);                       //23445
});

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // logic for create orderId
        const orderId = "23445";
        if (orderId) {
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(cart) {
    return true;
}

*/




/*

const cart = ["shoes", "shirts", "pants", "shorts"];

const promise = createOrder(cart);
console.log(promise);                                   //Promise { <pending> }

promise
    .then(function (orderId) {
        console.log(orderId);                               // after 5 seconds = 23445
        return proceedToPayment(orderId);
    })
    .then(function (success) {
        console.log(success);
    })
    .catch(function (err) {
        console.log(err);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            setTimeout(function () {
                const err = new Error("Cart is not valid");
                reject(err);
            }, 5000)
        }

        // logic for create orderId
        const orderId = "23445";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
    })
    return pr;
}
function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("payment successful!");
        }, 2000);
    })
}

*/


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data! 10");
    }, 10000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved data! 5");
    }, 5000)
});


p1.then(res => console.log(res))

p2.then(res => console.log(res))


setTimeout(() => { console.log("After 4 second"); }, 4000)
setTimeout(() => { console.log("After 2 second"); }, 2000)