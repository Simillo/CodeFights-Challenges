//https://codefights.com/challenge/jQHANjXgS7D6bR62t/main
firstone=s=>{
    r=[...s].sort()
    for(q of s)
        if(q!=r[r.indexOf(q)+1])
            return q
    return '-1'
}