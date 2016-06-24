//https://codefights.com/challenge/yhN2jyWsWDTWA4qnW/main
FactorialSum = n => {
    s = 0
    for (i of "" + r(n))
        s += +i
    return s
}
r = n => n ? n * r(n - 1) : 1
