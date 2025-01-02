let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let n = 3;
let m = 2;

for (let row = 0; row < n; row++) {
  let str = "";
  for (let col = 0; col < m; col++) {
    str += arr[row][col] + " ";
  }
  console.log(str);
}
