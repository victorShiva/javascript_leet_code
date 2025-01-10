const arrayOfNum = [26, 31, 3, 55, 7, 4, 2, 19, 32, 59, 2, 11];
const isertNum = 37;
const position = 4;

//function insertNum(num, position) {
//    arrayOfNum[position] = num;
//    return arrayOfNum;
//}
//insertNum(10, 4);
//console.log(arrayOfNum);


for (let i = arrayOfNum.length - 1; i >= 0; i--) {
    if (i >= position) {
        arrayOfNum[i + 1] = arrayOfNum[i];
        //if (i == position) {
        //    arrayOfNum[i] = isertNum;
        //    break;
        //}
    }
}
console.log(arrayOfNum);



