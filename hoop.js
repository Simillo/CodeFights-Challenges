//https://codefights.com/challenge/aenbibbSWhGZBz74L/main
hoop=(n,m,t)=>{
    r=[]
    for(c in t){
        q=c%n+1
        u=t[c]
        h=+c+1
        d=h%3==0||h%7==0?0:h
        !d&&u!=0?r.push(q):d!=u?r.push(q):0
    }
    return r
}