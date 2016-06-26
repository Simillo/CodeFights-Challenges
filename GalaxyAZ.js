//https://codefights.com/challenge/a9NhJYdzoBBPnxMJs/main
q=''
GalaxyAZ=(n,b)=>
	eval(`
		for(i of n.toString(91-b.charCodeAt()))
			q+=i>'_'?String.fromCharCode(90-(i.charCodeAt()-97)):i
	`)


/*Deveria funcionar. Não sei porque não funciona...
 *n.toString(91-b.charCodeAt()).replace(/[a-z]/,a=>String.fromCharCode(90-(a.charCodeAt()-97)))
 */