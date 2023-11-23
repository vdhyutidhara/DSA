/*
False
False
False
True
False
True
False
False
False
*/

const input = `
7
-6155
8
8449
524288
-14965
-128
12524
`
let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    var num = sInput[idx++]
    let n = num
    if (n > 0 && (n & (n - 1)) == 0) {
        console.log('True')
    } else {
        console.log('False')
    }
}



