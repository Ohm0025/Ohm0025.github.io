function draw(n){
    let ans = ''
    for(let i1=1;i1<=n;i1++){
        for(let i2=1;i2<=n;i2++){
            if(i2===i1) ans+="_"
            else ans += "*"
        }
        if(i1 !== n) ans += "\n"
    }
    console.log(ans)
}

draw(2)
draw(3)
draw(4)