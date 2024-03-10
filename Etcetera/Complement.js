const input = `
2
15 7
0 3
`
let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;

for (let t = 0; t < tc; t++) {
    let n = sInput[idx++];
    let [num1, num2] = n.split(' ');
    let bin1 = Number(num1).toString(2).split('');
    let bin2 = Number(num2).toString(2).split('');
    console.log(bin1,bin2)

}




