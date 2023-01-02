function draw(n){
    let ans = ""
    for(let i =n;i>0;i--){
        for(let j=2;j<=n+1;j++){
            if(j > i) ans += "*"
            else(ans += "-")
        }
        if(i !== 1) ans += "\n"
    }
    console.log(ans)
}
draw(4)