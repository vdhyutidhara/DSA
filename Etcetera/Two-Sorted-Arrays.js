// No extra space
// No. of elements commmon in both arrays

let input = `1
6
1 2 2 3 4 5
4 4 3 2 1 1`
let sInput = input.trim().split('\n')
let tc = sInput[0];
let idx = 1;
for (let t = 0; t < tc; t++) {
    let N = sInput[idx++];
    let A = sInput[idx++].split(' ');
    let B = sInput[idx++].split(' ');;
    let mapA = {};
    let mapB = {};

    for (let i = 0; i < N; i++) {
        let elem = A[i]
        if (mapA[elem]) {
            mapA[elem]++
        } else {
            mapA[elem] = 1;
        }
    }

    for (let i = 0; i < N; i++) {
        let elem = B[i]
        if (mapB[elem]) {
            mapB[elem]++
        } else {
            mapB[elem] = 1;
        }
    }

    let commmonCount = 0;

    for (item in mapA) {
        if (mapA[item] && mapB[item]) {
            commmonCount += Math.min(mapA[item], mapB[item])
        }
    }

    console.log(commmonCount)
}

