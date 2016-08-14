//https://codefights.com/challenge/pRhd3WGJME7CFSczX/main
maxBits = n => {
    c = n
    q = m(n)
    while (1) {
        u = m(c)
        if (q.join`` == u.join``)
            h = c
        else if (l(n) != l(c))
            return h
        c++
    }
}
l = n => n.toString(2).length
m = n => {
    u=z=0
    for(i of n.toString(2))
        i==0?
            z+=1
        :
            u+=1
    return [z,u]
}