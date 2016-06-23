//https://codefights.com/challenge/x9TcPgiFRmgN22W44/main
Cipher_Zeroes=n=>{
    s=0
    for(c of n)
      s+=/0|6|9/.test(c)?1:c==8?2:0
    return+(!s?0:s>0&&s%2==0?s-=1:s+=1).toString(2)
}