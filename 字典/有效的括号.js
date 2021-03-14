// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 时间复杂度和空间复杂度O(n)
const string = '{({})}}';

function isValid(str) {
    if(str.length % 2 === 1) {
        return false;
    }
    const stack = [];
    const map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');

    for(let i = 0; i < str.length; i++) {
        const c = str[i];
        if(map.has(c)) {
            stack.push(c);
        } else {
            const t = stack[stack.length-1];
            if(map.get(t) === c) {
                stack.pop();
            } else  {
                return false
            }
        }
    }
    return stack.length === 0;
}

isValid(string);
