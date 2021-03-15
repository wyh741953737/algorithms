
// 时间复杂度O(n2), 空间复杂度O(1)
const arr = [1,7,2,12,3,6,0,9]

function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len-1; i++) {
        for(let j = 0; j < len-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                const temp  = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return  arr;
}

const result = bubbleSort(arr)
console.log(result)