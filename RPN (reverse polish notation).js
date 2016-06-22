//https://codefights.com/challenge/qsRziH273jPy4p4ga/main
RPN=q=>{
    r=q.split(" ")
    o="+-*/%^"
    s=[]
    for (i in r)
        w=r[i],
        ~o.indexOf(w)?(p=s.length-2,u=w=="^"?"Math.pow("+s[p]+","+s[p+1]+")":s[p]+w+s[p+1],s.pop(),s.pop(),s.push(eval(u))):s.push(w)
    return ~~s[0]
}