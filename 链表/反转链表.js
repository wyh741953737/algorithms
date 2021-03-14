// 反转一个单链表
// 输入： 1->2->3->4->5->null;
// 输出:  5->4->3->2->1->null;

// 解题思路： 反转两个节点： 将n+1的next指向n， 反转多个节点，双指针遍历链表，重复
// 双指针一前一后遍历链表，反转双指针
// 时间复杂度O(n),空间复杂度O(1)

const reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while(p1) {
       const temp = p1.next;
       p1.next = p2;
       p2 = p1;
       p1 = temp;
    }
    return p2;
}