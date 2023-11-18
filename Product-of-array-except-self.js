const input = `
2
4
1 2 3 4
5
-1 1 0 3 -3
`

let sInput = input.trim().split('\n')
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let n = sInput[idx++];
    let arr = sInput[idx++].split(' ');

    let res = [];
    for (let i = 1; i <= n; i++) {
        let leftMul = arr.slice(0, i-1).reduce((acc, total) => acc * total, 1);
        let rightMul = arr.slice(i , n).reduce((acc, total) => acc * total, 1);
        res.push(leftMul * rightMul);
    }
    console.log(res.join(' '))
}