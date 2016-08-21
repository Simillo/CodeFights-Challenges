//https://codefights.com/challenge/52cFreA4YEu3vmLu5/main
emirpMinion=n=> {
    n+=''
    l=n.length
    s=o=0
    for(o;o<l;o++)
        for(c=o;c<=l;c++)
            p = n.substring(o,c),
            s+=p-1&&f(p)&&f([...p].reverse().join``)?+p:0
        
    return s?s:-1
            
}
f=n=>{
    for (i=2;i<=n/2;i++) if (n%i==0) return 0
    return 1
}