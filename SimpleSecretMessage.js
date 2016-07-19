//https://codefights.com/challenge/JGpAv9mkqkpCacQm2/main
q=0
h=s=''
SimpleSecretMessage=c=>{
    for(i of c){
        i>'@'&&i<'['?
            h?
            (
                s+=p,
                q=0,
                h=i
            )
            : 
                h=i
        :
            q+=i=='-'?-1:1
        p=String.fromCharCode(h.charCodeAt()+q)
    }
    return s+p
}