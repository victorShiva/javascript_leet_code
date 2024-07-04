
// ***************************** map
/*
const arr = [2, 4, 5, 6, 9, 1, 7, 41];
function double(i) {
    return 2 * i;
}
const output = arr.map(double);
console.log(output);




function binary(i) {
    return i.toString(2);
}
const binaryArr = arr.map(binary)
console.log(binaryArr);


const tripleArr = arr.map((i) => 3 * i);
console.log(tripleArr);
*/





// ************************* filter    **********************

const numbers = [3, 45, 67, 89, 22, 43, 11, 56, 99, 65];

// function moreThan50(num) {
//     return num > 50;
// }
// let filtNumbers = numbers.filter(moreThan50);
// console.log(filtNumbers);



// let filtNumbers = numbers.filter((i) => i > 50);
// console.log(filtNumbers);




// ********************************* reduce 

const arr = [2, 4, 5, 6, 9, 1, 7, 41];

// function findSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const sum = arr.reduce(function (acc, cur) {
//     acc = cur + acc;
//     return acc;
// }, 0)
// console.log(sum);



function maxValue(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}
// console.log(maxValue(arr));

const bigNumber = numbers.reduce((max, cur) => {
    if (max < cur) {
        max = cur;
    }
    return max;
}, 0)

// console.log(bigNumber);



// _________----------------------------------------_______________

let people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "keore", lastName: "leon", age: 25 },
    { firstName: "Peter", lastName: "Pan", age: 20 },
    { firstName: "Alice", lastName: "Wonderland", age: 22 },
    { firstName: "Bob", lastName: "Builder", age: 25 }
];

// const allPeopleName = people.map(function (person) {
//     let fullName = `${person.firstName} ${person.lastName}`;
//     return fullName;
// })
// console.log(allPeopleName);



// function specificAgePerson(arr) {
//     let agePerson = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (agePerson[arr[i].age]) {
//             agePerson[arr[i].age]++;
//         } else {
//             agePerson[arr[i].age] = 1;
//         }
//     }
//     return agePerson;
// }
// console.log(specificAgePerson(people));



const agePerson = people.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(agePerson);




// const flterPeople = people.filter((person) => {
//     return person.age > 22;
// }).map((person) => person.firstName)
// console.log(flterPeople);


const flterPeople = people.reduce((acc, curr) => {
    if (curr.age < 25) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])
console.log(flterPeople);