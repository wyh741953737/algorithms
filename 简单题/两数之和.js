// // 给定一个整数数组nums和一个整数目标值target，请你在该数组中找出和为目标值的那两个整数，并返回它们的下下标
// // 你可以假设每种输入都对应一个答案，但是数组中同一个元素不能使用2遍

// const nums = [2,15,2] // 返回target=9 ，输出[0,1]


// function returnIndex(nums, target) {
//     let indexArr =  [];
//     for(let i = 0; i < nums.length-1; i++) {
//         let pre  = nums[i];
//         for(let j = i+1; j < nums.length; j++) {
//             const cur = nums[j];
//             if(pre + cur === target) {
//                 indexArr.push(nums.indexOf(pre), nums.indexOf(cur));
//                 return returnIndex;
//             } 
//         }
//     }
// }

// const res = returnIndex(nums, 17)
// console.log(res)



