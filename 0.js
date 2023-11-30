const input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`;



let arr = [1, 2, 1, 3, 4],
  k = 3;
let ans = [];
for (let s = 0; s < arr.length; s++) {
  for (let e = s + 1; e < arr.length; e++) {
    ans.push(arr.slice(s, e));
  }
}
let res = []
for (let i=0; i<ans.length; i++) {
  let sum = 0
  for (let a=0; a<ans[i].length; a++) {
    sum = sum + ans[i][a];
  }
console.log(sum);
}