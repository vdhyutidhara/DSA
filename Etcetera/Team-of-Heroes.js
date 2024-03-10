const input = `2
5 31
10 11 13 17 21
5 44
10 11 13 17 21`

let sInput = input.trim().split('\n');
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let [N, K] = sInput[idx++].split(' ');
    let arr = sInput[idx++].split(' ').map(a=>parseInt(a));

    let left = 0, right = N - 1;
    let isPresent = false

    while (left < right) {
        let currSum = arr[left] + arr[right];

        if (currSum == K) {
            isPresent = true
            break;
        } else if (currSum < K) {
            left++
        } else {
            right--
        }
    }
    console.log(isPresent ? 'Yes' : 'No')
}


