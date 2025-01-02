function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    if (i == 1 || i == n) {
      let str = "";
      for (let j = 1; j <= n; j++) {
        str += "*" + " ";
      }
      console.log(str);
      continue;
    }
    console.log("*");
  }
}
