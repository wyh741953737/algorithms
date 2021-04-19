// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 输入：head = [1]
// 输出：[1]
// 输入：head = []]
// 输出：[]

var swapPairs = function(head) {
    if (head === null|| head.next === null) {
        return head;
    }
    const temp = head.next;
    head.next = swapPairs(temp.next);
    temp.next = head;
    return temp;
};

var swapPairs = function(head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummyHead.next;
};
