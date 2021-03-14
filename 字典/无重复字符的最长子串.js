// 给定一个字符串，请你找出其中不含重复字符串的最长子串的长度
// 输入： ”abcabcbb" 输出：3.无重复字符最长是"abc"
// 输入："bbb", 输出：1， 
// 输入："pwwkew" ,输出： 3，无重复最长子串："wke",必须是子串，pwke是子序列，wke是连续的

// 思路：先找出所有不包含重复字符的子串，找出长度最大的子串返回
// 用双指针维护一个滑动窗口，用来剪切子串
// 不断移动右指针，遇到重复字符就把做指针移动到重复字符的下一位

// 时间复杂度O(n), 空间复杂度O(m),m是字符串中不重复的字符串长度
const lengthOfSubString =  function(s) {
    let l = 0;
    let res = 0;
    const map = new Map();
    for(let r = 0; r < s.length; r+=1) {
        const cur = s[r];
        if(map.has(cur) && map.get(cur) >= 1) {
            l = map.get(cur)+1;
        }
        res = Math.max(res, r-l+1);
        map.set(cur, r);
    }
    return res
}