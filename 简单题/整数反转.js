// 给你一个32位的有符号整数x，返回将x中数字部分反转后的结果，如果反转后整数超过32位的有符号整数的范围[-2^31, 2^31-1]就返回0
// 比如输入x=123， 输出321， 输入x=-123，输出x=-321， 输入x=120，输出x=21

function reverse(x) {
    if(x === 0) {
        return 0;
    }
    let num = x.toString();
    const hasSymbol = num.indexOf('-') > -1;
    let arr  = [];
    if(hasSymbol) {
        num = num.slice(1);
        for(let i = 0; i < num.length; i++) {
            arr.push(num[i]);
        }
        return '-'.concat(arr.reverse().join(''));
    } else {
        for(let i = 0; i < num.length; i++) {
            arr.push(num[[i]]);
        }
        return arr.reverse().join('');
    }
}
const r = reverse(-123);
const rb = reverse(456);
console.log(r)
console.log(rb)

