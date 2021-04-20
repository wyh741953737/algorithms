// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
// 

function generate(numRows) {
     const ret = [];
     for (let i = 0; i < numRows; i++) {
         const row = new Array(i + 1).fill(1); // 第一轮：[1] 第二轮：[1,1], 第三轮:[1,1,1] 第四轮：[1,1,1,1], 第五轮： [1,1,1,1,1]
         for (let j = 1; j < row.length - 1; j++) {
             row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
         }
         ret.push(row);
     }
     return ret;
 };