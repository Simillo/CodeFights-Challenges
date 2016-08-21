//https://codefights.com/challenge/pYKuEoELw5sgo5oyM/main
ComputerUnitsToByte=(c,u)=>{
    for(i in p='KMGTP')
        if(p[i]==u[0])
            return Math.pow(2,(+i+1)*10)*c+''
}