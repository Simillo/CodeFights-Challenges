//https://codefights.com/challenge/pvyQzct8QsRsAXoyZ/main
s=0
addToFactorial=n=>f(n)+eval(`for(;n;)s+=n--`)
f=n=>n<2?1:n*f(n-1)