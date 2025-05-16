#include <stdio.h>
#include <stdlib.h>
#define MAX 3
struct Stack{
   int items[MAX];
   int top;
};
typedef struct Stack st;

void init(st *s){
   s->top = -1;
}

int isFull(st *s){
   if(s->top == MAX-1){
   return 1;
   }else{
      return 0;
   }
}
int isEmpty(st *s){
   if(s->top == -1){
      return 1;
   }else{
      return 0;
   }
}
void push(st*s,int i){
   if(isFull(s)){
      printf("Stack is Full\n");
   }else{
      s->top++;
      s->items[s->top] = i;
   }
}

void pop(st*s){
   if(isEmpty(s)){
   printf("Stack is empty");
   }else{
      s->top--;
   }
}
int main(){
   st *s = (st *)malloc(sizeof(st));

   init(s);

   push(s,1);
   push(s,2);
   return 0;
}
