// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
// 输入：1-1->2, 输出: 1->2
// 输入：1->1->2->3 输出： 1-2->3

// 思路：因为链表是有序的，重复元素一定相邻
// 遍历链表如果发现当前元素和下一个元素值相等就删除下一个元素

// 时间复杂度O(n)和空间复杂度O(1)
const deleteDuplicates = function(head) {
    const p  = head;
    while(p && p.next) {
        if(p.val  === p.next) {
            p.next =  p.next.next;
        } else  {
            p = p.next;
        }
    }

}