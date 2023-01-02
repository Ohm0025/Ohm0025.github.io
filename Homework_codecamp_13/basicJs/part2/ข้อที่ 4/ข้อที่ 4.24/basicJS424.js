function draw(n) {
  let count = 2 * n - 1;
  let m = 0;
  let ans = "";
  for (let i = count; i > 0; i--) {
    for (let j = 0; j < count; j++) {
      if (i <= n) {
        if (j >= n - i && j < n + i - 1) {
          m += 1;
          ans += m;
        } else ans += "_";
      } else {
        if (j >= i - n && j < count - i + n) {
          m += 1;
          ans += m;
        } else ans += "_";
      }
    }
    if (i !== 1) ans += "\n";
  }
  console.log(ans);
}
draw(2)
draw(3);
draw(4);
