//https://codefights.com/challenge/YeHucxXniMDZs2KAg
DigitSumRange=(a,b)=>{
    s=0
    for(;a<=b;)
        for(i of a+++'')
            s+=+i
    return s
}