//https://codefights.com/challenge/a9NhJYdzoBBPnxMJs/main

/*Deveria funcionar. Não sei por que não funciona...
 *Agora sei!
 */
GalaxyAZ=(n,b)=>n.toString(91-b.charCodeAt()).replace(/[a-z]/g,a=>String.fromCharCode(90-(a.charCodeAt()-97)))

/*GalaxyAZ=(n,b)=>
	eval(`
		q=''
		for(i of n.toString(91-b.charCodeAt()))
			q+=i>'_'?String.fromCharCode(90-(i.charCodeAt()-97)):i
	`)
*/