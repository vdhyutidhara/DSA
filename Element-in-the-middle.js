/*
8
5 6 4 3 5 7 7 8
*/
const arr = [5, 6, 4, 3, 5, 7, 7, 8];
const n = arr.length;
let isPresent = '-1'
for (let i = 1; i < n - 1; i++) {
    const leftMax = Math.max(...arr.slice(0, i));
    const rightMin = Math.min(...arr.slice(i + 1));

    if (arr[i] >= leftMax && arr[i] <= rightMin) {
        isPresent = arr[i];
        break;
    }
}
console.log(isPresent);