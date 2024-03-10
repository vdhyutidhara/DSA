const num = 17
// Approach 1: let power = Math.pow(num,4);

// Approach 2:
let n = 4;
let power = 1;
for (let i = 0; i < n; i++) {
    power = power * num
}

console.log(power)