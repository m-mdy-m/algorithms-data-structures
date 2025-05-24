function binarySearch(array,item){
    let low   = 0, 
    high      = array.length -1,
    mid,
    guess;
    while(low<=high){
        mid   = low+high
        guess = array[mid]
        if (guess===item){
            return mid
        }else if(guess<item){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return null
}
const arr = [1,3,5,6,7,8,19]
console.log(binarySearch(arr,8))
