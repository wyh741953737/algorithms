// 选择排序，先在未排序的列表中找出最小的，放在最初的位置
// 表现最稳定的排序算法之一，无论什么数据进去都是O(n2)的时间复杂度。唯一的好处就是不占用额外的内存空间了
const  arr2  = [1,9,2,8,4,7,3]

function selectSort(arr) {
    const len = arr.length;
    let minIndex, temp;
    for(let i = 0; i < len-1; i++) {
        minIndex = i;
        for(let j = i+1; j < len; j++) {
            if(arr[j] < arr[i]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

const r = selectSort(arr2)
console.log(r)