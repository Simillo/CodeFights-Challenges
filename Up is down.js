//https://codefights.com/challenge/veKhzbzb3hSJvxzmm/main
upIsDown=n=>{
    n+=''
    l=p=n.length
    r=1
    for(i in n){
        l--
        o=n[i]
        q=n[l]
        o==1&&q^1?r=0:o==8&&q^8?r=0:(o==6&&q^9)||(o==9&&q^6)?r=0:o==0&&q^0?r=0:1
    }
    return p<2?n==1?1:"23457".indexOf(n)?0:0:r
}