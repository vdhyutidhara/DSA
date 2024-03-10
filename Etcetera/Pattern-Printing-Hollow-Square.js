let patternUnit = '*';

/*
4

00 01 02 03 04 05 06
10 11 12 13 14 15 16
20 21 22 23 24 25 26
30 31 32 33 34 35 36
40 41 42 43 44 45 46
50 51 52 53 54 55 56
60 61 62 63 64 65 66
*/

let N = 10;
let matr = [];
for (let i = 0; i < N; i++) {
    const rows = [];
    for (j = 0; j < N; j++) {
        if (i == 0 || i == N - 1 || j == 0 || j == N - 1) {
            rows.push('*')
        } else {
            rows.push(' ')
        }
    }
    matr.push(rows.join(' '));
}

console.log(matr.join('\n'))