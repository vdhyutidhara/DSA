const input = `
2
1
5
5
1 2 1 3 2
`
let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;

for (let t = 0; t < tc; t++) {
    let n = sInput[idx++];
    let arr = sInput[idx++].split(' ');
    let final;
    for (let i = 0; i < n; i++) {
        final = final ^ arr[i]
    }
    console.log(final)
}