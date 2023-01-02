function draw(n) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if(i !== n-1){
        if(j >= n-i-1 && j < n+i) ans += "*"
        else ans += "_"
      }
        else ans += "*";
    }
    if (i != n - 1) ans += "\n";
  }
  console.log(ans);
}

draw(2);
draw(3);
draw(4);
draw(5);
