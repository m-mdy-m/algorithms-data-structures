number = [10,2,4,1,5]

def linearSearch(array,num):
    for i in range(len(array)):
        if array[i] == num:
            return i
    
    return -1

print(linearSearch(number,4)) # 2
print(linearSearch(number,6)) # -1