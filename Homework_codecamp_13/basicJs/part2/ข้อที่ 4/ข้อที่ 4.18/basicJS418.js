function draw(n){
    let ans = ""
    for(let i =0;i<n;i++){
        for(let j=1;j<=n;j++){
            if(j > i) ans += "*"
            else(ans += "-")
        }
        if(i !== n-1) ans += "\n"
    }
    console.log(ans)
}
draw(2)
draw(3)
draw(4)