function draw(n){
    let ans = '';
    for(let i1 = 1 ; i1 <= n;i1++){
        for(let i2 = 1 ; i2 <= n;i2++) ans += i1
        if(i1 !== n) ans += "\n"
    } 
    console.log(ans)
}

draw(4)