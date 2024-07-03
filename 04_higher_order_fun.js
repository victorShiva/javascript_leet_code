/*
const radius = [4, 7, 9, 2, 7];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output[i] = Math.PI * radius[i] * radius[i];
    }
    return output;
}
console.log(calculateArea(radius));



const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output[i] = 2 * Math.PI * radius[i];
    }
    return output;
}
console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output[i] = 2 * radius[i];
    }
    return output;
}
console.log(calculateDiameter(radius));
*/




//     DRY method

const radius = [4, 7, 9, 2, 7];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}
const calculate = function (radius, callback) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output[i] = callback(radius[i]);
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

const circleArea = radius.map(area);
console.log(circleArea);