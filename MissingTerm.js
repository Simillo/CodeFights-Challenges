//https://codefights.com/challenge/3j5Zd3nRMjghZttP2/main
s=i=0
MissingTerm=(a,l)=>
    eval(`
        while(s<=l)
            s+=a+i++
        s-l
    `)