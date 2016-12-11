//https://codefights.com/challenge/CN6zAWnaZYjcQTRyf
majorIndex=n=> {
    s = 0
    n = (+n).toString(2)
    for(i=n.length-1;i>0;i--)
        if(+n[i]&&!+n[i-1])
            s+=n.length-i
    return s
}
