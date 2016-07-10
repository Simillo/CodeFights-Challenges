//https://codefights.com/challenge/qQ762Pzrgm5KaBMT6/main
secondLargest=n=>
    eval(`
        u=[n]
        while(n^1)
            u.unshift(n=n%2?n*3+1:n/2)
        u.sort((a,b)=>b-a)[1]
    `)