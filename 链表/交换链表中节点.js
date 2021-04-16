// 1->2->3->4 变成 4->3->2->1
// 思路：通过递归实现交换，递归终止条件是链表中没有节点或者只有一个节点无法交换
// head：链表头节点，newHead表示链表的第二个节点，时间复杂度O(n），空间复杂度O(n)
function swapPairs(head) {
    if(head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
}


// 迭代实现
// 增加一个dummyHead,时间复杂度O(n），空间复杂度O(1)

function iteragtorSwap(head) {
    const dummyHead= new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while(temp !== null && temp.next.next !== null)  {
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1
    }
    return dummyHead;
}