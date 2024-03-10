const input = `
8
122
9
84
109
2187
59049
186
131
`
let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let num = sInput[idx++]
    let base = 3;
    let p = (Math.log(num) / Math.log(base)).toFixed(5);
    if (p - Math.floor(p) == 0) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
}



