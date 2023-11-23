const input = `4
1
3
7
6`

let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let num = sInput[idx++];
    let binNum = Number(num).toString(2).split('')
    let count = 0;
    for (let i = 0; i < binNum.length; i++) {
        if (binNum[i] == 1) {
            count++
        }
    }
    console.log(count)
}