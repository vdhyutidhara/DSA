const input = `
4
aman
`

const sInput = input.trim().split('\n');
const n = sInput[0];
const str = sInput[1].split('');

for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (str[i] == str[j] && i > j) {
            break;
        }
        if (str[i] == str[j]) {
            count++;
        }
    }
    if (count > 0)
        console.log(`${str[i]}-${count}`);
}

