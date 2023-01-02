function draw(n) {
  let ans = "";
  let count = 1;

  for (let i = 0; i < n; i++) {
    for (let i = 1; i <= n; i++) {
      ans += count;
    count++;
    }
    if (i !== n - 1) ans += "\n";
  }
  console.log(ans);
}

draw(3);
draw(4);
