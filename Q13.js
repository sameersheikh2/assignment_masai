let studentScores = [21, 23, 44, 35, 40, 50, 52, 89, 98, 79];
let count = 0;
for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] < 40) {
    studentScores[i] += 20;
  }
  if (studentScores[i] > 50) count++;
  if (studentScores[i] > 90) studentScores[i] = 90;
}

console.log(count);
console.log(studentScores);
