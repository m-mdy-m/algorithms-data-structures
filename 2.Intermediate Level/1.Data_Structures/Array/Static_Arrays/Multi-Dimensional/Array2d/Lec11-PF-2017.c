#include <stdio.h>

int main(){
    /** TASK A:*/
    printf("TASK A:\n");
    // int a[10][10];
    // int sum=0;
    // for (int i=0;i<=9;i++){
    //     for(int j=0;j<=9;j++){
    //         a[i][j] = i+j;
    //         printf("%2d",a[i][j]);
    //     }
    //     printf("\n");
    // }
    // for (int i=0;i<=9;i++){
    //     sum+=a[i][i];
    // }
    // printf("%d\n",sum);
    printf("TASK B\n");
    int a[6][4] = {
     {1,29,4,8},
     {8,19,2,4},
     {7,2,4,2},
     {8,19,2,8},
     {8,19,27,4},
     {49,10,2,4}
    };
    int min = a[0][0];
    int max = a[0][0];
    for(int i=0;i<6;i++){
        for(int j=0;j<4;j++){
            if(a[i][j]<min){
                min = a[i][j];
            }
            if(a[i][j]>max){
                max = a[i][j];
            }
        }
    }
    printf("%3d min\n",min);
    printf("%3d max\n",max);
}