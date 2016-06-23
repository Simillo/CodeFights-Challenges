//https://codefights.com/challenge/JGNL3YRDqC7By3fbu/main
reverse_t9=k=>{
    q={}
    c=1
    h=2
    s=""+h
    u=String.fromCharCode
    for(i=97;i<123;i++)
        l=u(i),h!=7&&h!=9?c>2?(q[l]=s,c=0,h++,s=""+h):(q[l]=s,s+=s[0]):c>3?(q[l]=s,c=0,h++,s=""+h):(q[l]=s,s+=s[0]),
        c++
    for(i=122;i>96;i--)
        l=u(i),k=k.replace(new RegExp(q[l],'g'),l)
    return k.replace(/\s/g,"").replace(/0/g," ")
}