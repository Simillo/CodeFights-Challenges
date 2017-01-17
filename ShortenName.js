//https://codefights.com/challenge/ueKvGPJ8X2pircnkW
ShortenName=n=>(q=n.match(/\S+/g)).length>2?q.map((c,i)=>i^q.length-1?c:c[0]+'.').join` `:n