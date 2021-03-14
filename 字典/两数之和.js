// 给定一个整数数组nums和一个整数目标值target，请你在该数组中找出和为目标值的那两个整数，并返回它们的下下标
// 你可以假设每种输入都对应一个答案，但是数组中同一个元素不能使用2遍

// 时间复杂度O(n）， 空间复杂度O(n)

const nums = [2,15,2] // 返回target=9 ，输出[0,1]
function returnIndex(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const n2 = target-n;
        if(map.has(n2)) {
            return [map.get(n2), i]
        } else {
            map.set(n, i)
        }
    }
}





