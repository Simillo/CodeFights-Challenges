//https://codefights.com/challenge/GPw6LZT685xxJgnvT/main
q = 'ABCDEFGHIJKL'
GenerateCode = (l, y, m, n) =>
    eval(`
        m--
        s = l
        y += ''
        y = y.length < 2 ? '0' + y : y
        p = y.length
        for (i = p - 2; i < p; i++)
            s += y[i]
        s += q[m]
        p = s.length
        n += ''
        l = n.length
        if (p < 9)
            if (l + p ^ 9)
                if (r = 9 - p, r > l) {
                    for (i = 0; i <= r - l - 1; i++) s += "0"
                    s + n 
                } else {
                    for (i = l - r; i <= l - 1; i++) s += n[i]
                    s
                }
        else
            s + n
    `) 