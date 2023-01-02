function draw(n){
    let ans = "";
    for(let i = 0 ; i < n;i++) {
        for(let i = 0 ; i < n;i++) ans += "*"
        if(i !== n-1) ans += "\n"
    }
    
    console.log(ans)
}

draw(4)
