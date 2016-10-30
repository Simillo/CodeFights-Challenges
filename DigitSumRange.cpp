//https://codefights.com/challenge/YeHucxXniMDZs2KAg
int DigitSumRange(int a, int b) {
    int s=0;
    for(;a<=b;){
        int c=a++;
        while(c){
            s+=c%10;
            c/=10;
        }
    }
    return s;
}