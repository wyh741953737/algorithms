// 是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。
function shellSort(arr) {
    const len = arr.length;
    // gap = 5, 2, 1
    for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for(let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]) {
                 arr[j] = arr[j - gap];
                 j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}