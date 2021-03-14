// 给定两个数组，求交集,输出结果唯一，不考虑顺序
// 输入num1 = [1,2,3], num2=[2,3,4] 输出：[2,3]
// 先对数组一去重，再遍历数组一，就得到不重复的交集
// 时间复杂度：O(n^2), 空间复杂度O(n)
const insertSection = function(arr1, arr2) {
    return [...new Set(arr1).filter(n => arr2.includes(n))]
}