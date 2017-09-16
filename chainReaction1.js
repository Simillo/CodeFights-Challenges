chainReaction1=(n, m)=> {
    r = []
    for(i = n; i--;)
        r[i] = Array(n).fill(0);
    --n
    for (x of m){
        u = x[0]
        i = x[1]
        ++r[x[0]][x[1]]
        
    }
    return r
}
console.log(chainReaction1(4, [[0,0],[0,0]]));