let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2],
];

let str = "";
for (let row = 0; row < matrix.length; row++) {
  if ((row + 1) % 2 != 0) {
    for (let col = matrix[row].length - 1; col >= 0; col--) {
      str += matrix[row][col] + " ";
    }
  } else
    for (let col = 0; col < matrix[row].length; col++)
      str += matrix[row][col] + " ";
}
console.log(str);
