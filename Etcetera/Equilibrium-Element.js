

const input = `
2
5
15 1 5 5 5
3
1 2 3
`
let sInput = input.trim().split('\n')
let tc = sInput[0];
let idx = 1
for (let t = 0; t < tc; t++) {
    let n = sInput[idx++];
    let arr = sInput[idx++].split(' ');

    let isEquilibrium = '-1';
    for (let i = 1; i < n - 1; i++) {
        let leftAdd = arr.slice(0, i).reduce((a, b) => Number(a) + Number(b), 0)
        let rightAdd = arr.slice(i + 1, n).reduce((a, b) => Number(a) + Number(b), 0)
        if (leftAdd === rightAdd) {
            isEquilibrium = i
            break;
        }
    }
    console.log(isEquilibrium);
}
