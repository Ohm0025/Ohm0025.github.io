function draw(n) {
  let count = 2 * n - 1;
  let ans = "";
  for (let i = count; i > 0; i--) {
    for (let j = 0; j < count; j++) {
      if (i <= n) {
        if (j >= n - i && j < n + i - 1) ans += "*";
        else ans += "_";
      } else {
        if(j >= i-n && j<count-i+n) ans += "*"
        else ans += "_"
      }
    }
    if (i !== 1) ans += "\n";
  }
  console.log(ans);
}

draw(3);
draw(4);
