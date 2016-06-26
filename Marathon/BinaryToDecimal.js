s=""
messageFromBinaryCode=c=>
    eval(`
        for (i of c.match(/.{1,8}/g))
			s+=String.fromCharCode(parseInt(i,2))
    `)