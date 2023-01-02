function draw(n) {
  let ans = "";
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i < n) {
        if (j <= i) ans += "*";
        else ans += "_";
      }
      else{
        if (j >= (2*n-1) -i ) ans += "_";
        else ans += "*";
      }
    }
    if (i !== 2 * n - 2) ans += "\n";
  }
  console.log(ans);
}


draw(2);
draw(3);
