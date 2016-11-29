//https://codefights.com/challenge/fRHHjzTpn2eN46cN3/
q = 0
ZeroAtDEnd=n=>
    eval(`
        while(n/5>0)
            q+=(n/=5)|0
`)