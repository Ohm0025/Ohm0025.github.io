function draw(n){
    let ans = '';
    for(let i = n ; i > 0;i--){
        for(let j = 1 ; j <= n;j++) ans += i
        if(i !== 0) ans += "\n"
    } 
    console.log(ans)
}

draw(4)