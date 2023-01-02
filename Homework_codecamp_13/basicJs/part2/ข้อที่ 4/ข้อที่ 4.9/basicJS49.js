function draw(n) {
  let ans = "";
  let count = 2;
  for (let i = 0; i < n; i++) {
    ans += count;
    if (i !== n - 1) ans += "\n";
    count += 2;
  }
  console.log(ans);
}

draw(3);
draw(4);
