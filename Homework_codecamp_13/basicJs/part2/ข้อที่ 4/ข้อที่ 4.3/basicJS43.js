function draw(n){
    let ans = '';
    for(let i = 0 ; i < n;i++){
        for(let i = 1 ; i <= n;i++) ans += i
        if(i !== n-1) ans += "\n"
    } 
    console.log(ans)
}

draw(3)