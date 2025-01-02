let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let str = "";
for (let row = matrix.length - 1; row >= 0; row--) {
  str += matrix[row][0] + " ";
}

for (let col = 1; col <= matrix.length - 1; col++) {
  str += matrix[0][col] + " ";
}

for (let row = 1; row < matrix.length; row++) {
  str += matrix[row][matrix[row].length - 1] + " ";
}

for (let col = 1; col > 0; col--) {
  str += matrix[matrix.length - 1][col] + " ";
}
console.log(str);
