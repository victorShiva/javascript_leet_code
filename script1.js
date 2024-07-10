let h1 = document.querySelector('h1');
function changeColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(color);
        }, 2000)
    })
}
async function startChangeColor() {
    const a = await changeColor('red');
    const b = await changeColor('green');
    const c = await changeColor('blue');
    const d = await changeColor('purple');
    const e = await changeColor('grey');
}
startChangeColor();

// changeColor('red')
//     .then(res => {
//         console.log(res);
//         return changeColor('green');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('blue');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('yellow');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('purple');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('grey');
//     })
//     .catch(error => {
//         console.log(error);
//     })