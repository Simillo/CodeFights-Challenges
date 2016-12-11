//https://codefights.com/challenge/okok2rHiWhetqWZfR
CodeFight=n=>{
    r=[]
    c='Code'
    f='Fight'
    for(i=1;i<=n;i++)
        r[i-1] = i%5==0?i%7==0?c+f:c:i%7==0?f:i+''
    return r
}