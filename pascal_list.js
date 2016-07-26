//https://codefights.com/challenge/4ECzquhAwThPY7Ak8/main
pascal_list=n=>{
    r=[]
    q=1
    c=~~(n/2)+1
    for(i=1;i<=n;i++)
        r.push(n%2?i<c?q++:c--:i<n/2?q++:i^n/2?q--:q)
    return r
}