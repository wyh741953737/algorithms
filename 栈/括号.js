// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 思路：如果字符串长度是奇数，直接返回false 对于没有闭合的左括号，越靠后的左括号对应的右括号越靠前，满足后进先出，考虑用栈
// 新建栈，扫描字符串，遇到左括号入栈，遇到和栈顶括号匹配的右括号就出栈，类型不匹配直接判断不合法，最后栈空了就合法
 
// 怎么判断类型是不是匹配？

// 遍历，如果c为左括号都push进stak，否则：c为右括号，取出stack最后一个和c比较，如果左括号为(那右括号必须为),或者左括号{，右括号必须为},判断是否相等，相等pop，否则直接返回false

const string = '{({})}}';

function isValid(str) {
    let arr =  [];
    if(str.length % 2 === 1)  {
        return false;
    }
    for(let i = 0; i < str.length; i++) {
        const s  = str[i];
        if(s === '{' || s === '(' || s === '[') {
            arr.push(s);
        } else {
            const t = arr[arr.length -1];
            if(s === '{' && t === '}' || s === '(' &&  t === ')' || s === '[' && t === ']') {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
}

isValid(string);
