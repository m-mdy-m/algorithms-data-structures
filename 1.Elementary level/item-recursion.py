
def count_rec(l):
    if l==[]:
        return 0
    count=1
    count +=count_rec(l[1:])
    return count

items = [1,1,1,2,3]
print(count_rec(items))
