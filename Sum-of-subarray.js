const input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`;

let sInput = input.trim().split('\n')
let tc = sInput[0];
let idx = 1;

for (let t = 0; t < tc; t++) {
    let [N, K] = sInput[idx++].split(' ')
    let arr = sInput[idx++].split(' ')
    let ans = [];
    for (let s = 0; s < N; s++) {
        for (let e = s + 1; e < N; e++) {
            ans.push(arr.slice(s, e));
        }
    }
    // console.log(ans)
    let res = [];
    for (let i = 0; i < ans.length; i++) {
        let sum = 0;
        for (let a = 0; a < ans[i].length; a++) {
            sum = sum + Number(ans[i][a]);
        }
        res.push(sum);
    }
    console.log(res.includes(K))
}