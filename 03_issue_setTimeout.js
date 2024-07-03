// ************************* 1
/*
console.log("Start");

setTimeout(() => {
    console.log("callback");
}, 2000);

console.log("End");


let starTime = Date.now();
let endTime = starTime;
console.log(starTime);
while (starTime < endTime + 10000) {
    starTime = Date.now();
}

console.log(starTime);
console.log("While is Expired!");

*/



// let count = 0;
// let startDate = Date.now();
// let endDate = new Date().getTime() + 1000;
// while (startDate < endDate) {
//     startDate = new Date().getTime();
//     count++;
// }
// console.log(count);




// *********************** 2

console.log("Start");

setTimeout(function cb() {
    console.log("callback1");
}, 0);

function cb() {
    console.log("callback2");
}
cb();

console.log("End");