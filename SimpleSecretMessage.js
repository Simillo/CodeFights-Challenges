//https://codefights.com/challenge/JGpAv9mkqkpCacQm2/main
q=0
h=s=''
u=String.fromCharCode
SimpleSecretMessage=c=>{
    for(i of c)
        i>'@'&&i<'['?
            h?
            (
                s+=u(h.charCodeAt()+q),
                q=0,
                h=i
            )
            :
                h=i
        :
            q=i=='-'?q-=1:i=='+'?q+=1:q
    s+=u(h.charCodeAt()+q)
    return s
}