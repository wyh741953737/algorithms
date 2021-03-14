// 给定一个链表，判断链表中是否有环，为了表示给定链表中的环，我们用整数pos；来表示链表尾连接到链表中的位置（索引从0开始）
// 如果pos是-1，则在该链表中没有环
// 输入：head=[3,2,0,-4], pos=1, 输出true，链表中有一个环，其尾部连接到第二个节点
// 思路：用一快一慢指针来遍历链表，如果指针能够相逢，表示链表有圈

// 时间复杂度O(n),空间复杂度O(1)
const hasCycle =  function(head) {
    let p1 =  head;
    let p2 = head;
    while(p1 && p2) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            return true;
        }
    }
    return false;
}