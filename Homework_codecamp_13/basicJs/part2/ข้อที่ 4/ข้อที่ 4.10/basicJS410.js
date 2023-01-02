function draw(n) {
  let ans = "";
  count = 1
  for (let i1 = 1; i1 <= n; i1++) {
    for (let i2 = 1; i2 <= n;i2++) {
        ans += i2*count;
    }
    count +=1
    if (i1 !== n) ans += "\n";
  }
  console.log(ans);
}
draw(2);
draw(3);
draw(4);
