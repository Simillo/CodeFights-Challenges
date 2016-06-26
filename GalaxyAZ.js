//https://codefights.com/challenge/a9NhJYdzoBBPnxMJs/main
q=''
GalaxyAZ=(n,b)=>
	eval(`
		for(i of n.toString(91-b.charCodeAt()).split(''))
			q+=i>'@'&&i<'{'?String.fromCharCode(90-(i.charCodeAt()-97)):i
	`)