const numbers = [10,2,4,1,5]
function LinearSearch(arr:number[],num:number):number{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===num){
            return i
        }
    }
    return -1
}
console.log(numbers,4)
console.log(numbers,6)