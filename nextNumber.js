//https://codefights.com/challenge/fE4DJSQmFQEWrdYwp/main
nextNumber=n=>{
    c=n&-n
    r=n+c
    return ((r^n)>>2)/c|r
}
// HAKMEM item 175
// A057168
// http://code.stephenmorley.org/articles/hakmem-item-175/

/*Solução manual/sem bitwise.
	c=h=0
	nextNumber=n=>{
	    q = [...n.toString(2)].map(a=>c+=a^1?0:1)
	    h=c
	    p=n+1
	    while(1){
	        c=0
	        q = [...p.toString(2)].map(a=>c+=a^1?0:1)
	        if(c^h)
	            p++
	        else
	            return p
	    }
	}
*/