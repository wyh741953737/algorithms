// 原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 插入排序在实现上，只需用到O(1)的空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

function insertSort(arr) {
    const len = arr.length;
    let preIndex, current;
    for(let i=1; i<len;i++) {
        preIndex = i-1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
const resInsert = insertSort([9,2,0,6,3,4,8])
// console.log(resInsert)