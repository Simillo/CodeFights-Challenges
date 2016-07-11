//https://codefights.com/challenge/sfW9pdqpfDCiasbX6/main
f=MultipleNumber=n=>q(n)>9?f(q(n)):q(n)
q=n=>+[...n+''].reduce((a,b)=>a*b)