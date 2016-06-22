//https://codefights.com/challenge/qsRziH273jPy4p4ga/main
RPN=q=>{
    r=q.split(" ")
    o="+-*/%^"
    s=[]
    for (i of r)
        ~o.indexOf(i)?(p=s.length-2,u=i=="^"?"Math.pow("+s[p]+","+s[p+1]+")":s[p]+i+s[p+1],s.pop(),s.pop(),s.push(eval(u))):s.push(i)
    return ~~s[0]
}