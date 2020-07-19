#include<stdio.h>
int arr[10010];
int main(){
    int n, ThisSum=0, MaxSum=-1, Minindex=0, Maxindex=0, Tempindex=0;
    scanf("%d", &n);
    for(int i=0; i<n; i++){
        scanf("%d", &arr[i]);
        ThisSum+=arr[i];
        if(ThisSum>MaxSum){
            MaxSum=ThisSum;
            Maxindex=i;
            Minindex=Tempindex;
        }
        if(ThisSum<0){
            ThisSum=0;
            Tempindex=i+1;
        }
    }
    if(MaxSum<0)printf("0 %d %d", arr[0], arr[n-1]);
    else{printf("%d %d %d", MaxSum, arr[Minindex], arr[Maxindex]);}
    return 0;
}