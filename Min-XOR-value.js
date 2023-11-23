const input = `1
9
6 7 2 1 6 6 5 2 7
`
let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let n = sInput[idx++];
    let arr = sInput[idx++].split(' ');
    let final = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let xor = Number(arr[i]) ^ Number(arr[j]);
            final.push(xor)
        }
    }
    console.log(Math.min(...final))
}