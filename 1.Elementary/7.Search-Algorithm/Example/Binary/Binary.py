def binarySearch(arr,key):
    start = 0
    end = len(arr) - 1
    while start <= end :
        mid = round((start + end)/2)
        if arr[mid] == key :
            return mid
        if key < arr[mid] :
            end = mid - 1
        else :
            start = mid +1
    return -1

arr = [0,1,2,3,4,6,100,10000];

print(binarySearch(arr, 100)); # 6