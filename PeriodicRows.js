//https://codefights.com/challenge/uPYiZqNFE3n2LiLpg/main
q=1
PeriodicRows=n=>
    eval
    (`
        for(a of [2,10,18,36,54,86,118])
            n>a?
                q++
            :
                q
    `)