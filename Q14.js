let tasks = [
  "learn css", // 0 , 1
  "watch youTube tutorial", // 1 ,2
  "make some notes", // 2 ,3
  "clear doubts", // 3 , 4
  "take proper meal", // 4
];

let newTasks = ["click professional picture", "complete assignment"];

for (let i = 0; i <= tasks.length; i++) tasks[i] = tasks[i + 1];

tasks.length = tasks.length - 1;

for (let i = tasks.length + 2; i > 0; i++) {
  tasks[i] = tasks[i - 2];
}

console.log(tasks);
