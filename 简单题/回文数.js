// 给你一个整数x，如果x是一个回文整数，返回true，否则返回false
// 回文数是指正序（从左到右）和倒叙（从右到左）读都是一样的整数，例如121是回文，而123不是

// 思路：如果是奇数，判断左右两边是不是相等的，栈

function isPalingrome(x) {
    let str = x.toString();
    let centerIndex;
    let leftStr;
    let rightStr;
    let leftArr  = []
    if(str.length % 2 === 1) {
        centerIndex = (str.length-1)/2;
        leftStr = str.slice(0, centerIndex)
        rightStr = str.slice(centerIndex+1);
    } else {
        center = str.length / 2
        leftStr = str.slice(0, center);
        rightStr = str.slice(center);
    }
    for(let i = 0; i < leftStr.length; i++ ){
        leftArr.push(leftStr[i])
    }
    if(leftArr.reverse().join('') === rightStr.toString()) {
      return true;
    } 
    return false;
}

const res  =  isPalingrome(1)
console.log(res) 
