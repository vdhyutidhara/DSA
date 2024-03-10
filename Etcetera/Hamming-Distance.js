const input = `2
15 7
0 3`

let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let [num1, num2] = sInput[idx++].split(' ');
    let xor = (num1 ^ num2).toString(2).split('');
    let count = 0;
    for (let i = 0; i < xor.length; i++) {
        if (xor[i] == 1) count++
    }
    console.log(count)
}