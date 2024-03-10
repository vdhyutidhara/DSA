const input = `
5
eodc
odec
code
baca
aabc
`
const sInput = input.trim().split('\n');
const tc = sInput[0];
let idx = 1;
let arr = []
for (let t = 1; t < tc; t++) {
    let i1 = sInput[t].split('').sort().join('')
    arr.push(i1)
}
let uniqArr = new Set(arr)
console.log(uniqArr.size);
console.log([...uniqArr].sort().join('\n'))