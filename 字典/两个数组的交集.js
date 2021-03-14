// 给定两个数组，编写一个函数计算交集,输出结果中的每个元素一定是唯一的，可以不考虑输出结果的顺序
// 输入 num1 =[1,2,2,3], num2=[2,2]
// 输出[2]

// 时间复杂度O(m)+O(n)， 空间复杂度O(m)
const interSection = function(num1, num2) {
    const map = new Map();
    num1.forEach(n => {
        map.set(n, true)
    })
    const res = [];
    num2.forEach(n => {
        if(map.get(n)) {
            res.push(n);
            map.delete(n);
        }
    })
    return res;
}