/*
6
-5 -2 0 1 13 9
*/

let arr = [-5, -2, 0, 1, 13, 9]
let lenArr = arr.length;
let count = 0;
for (let i = 0; i < lenArr; i++) {
    if ((i === 0 && arr[i] > arr[i + 1]) || (i === lenArr - 1 && arr[i] > arr[i - 1])) {
        count++;
        // console.log('1')
    } else if ((arr[i - 1] < arr[i]) && (arr[i] > arr[i + 1])) {
        count++;
        // console.log('2')
    }
}
console.log(count);