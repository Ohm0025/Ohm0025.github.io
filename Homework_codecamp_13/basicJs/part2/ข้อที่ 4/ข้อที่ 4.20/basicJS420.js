function draw(n) {
  let ans = "";
  let count = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i < n) {
        if (j >= n - i - 1) {
          count += 1;
          ans += count;
        } else ans += "-";
      } else {
        if (j > i - n) {
          count += 1;
          ans += count;
        } else ans += "-";
      }
    }
    if (i !== 2 * n - 2) ans += "\n";
  }
  console.log(ans);
}

draw(2);
draw(3);
draw(4);
