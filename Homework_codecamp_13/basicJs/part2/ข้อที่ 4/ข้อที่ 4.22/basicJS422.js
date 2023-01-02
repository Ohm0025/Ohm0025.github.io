function draw(n) {
  let count = 2 * n - 1;
  let ans = "";
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < count; j++) {
      if(i !== 0){
        if(j >= n-i && j < n+i-1) ans += "*"
        else ans += "_"
      }
      else ans += "*";
    }
    if (i !== 1) ans += "\n";
  }
  console.log(ans);
}

draw(2);
draw(3);
draw(4);
draw(5);
