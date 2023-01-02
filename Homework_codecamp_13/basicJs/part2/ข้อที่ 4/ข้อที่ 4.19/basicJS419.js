function draw(n) {
    let ans = "";
    for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) {
        if(i<n){
            if(j >= (n-i-1)) ans += "*"
            else ans += "_"
        }else{
            if(j>i-n) ans += "*"
            else ans += "_"
        }
      }
      if (i !== 2 * n - 2) ans += "\n";
    }
    console.log(ans);
  }
  
  
  draw(2);
  draw(3);
  draw(4);

  draw(6)
  