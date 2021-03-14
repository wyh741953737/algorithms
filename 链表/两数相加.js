// 给出两个非空链表来表示两个非负整数，其中，他们各自的尾数是按照逆序方式存储的，并且他们每个节点只能存储一位数字
// 如果我们将这两个数加起来，则会返回一个新的链表来表示他们的和，你可以假设除了数字0之外，这两个数都不会以0开头
// 输入(2->4->3)+(5->6->4)
// 输出： 7->0->8
// 原因：342+456=807
// 两个链表一长一短的话呢
// 时间复杂度和空间复杂度都是O(n)

const addToNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2) {
        const v1  = p1 ? p1.val : 0;
        const v2  = p2 ? p2.val : 0;
        const val = v1+v2+carry;
        carry  = Math.floor(val/10);
        p3.next  = new ListNode(val%10);
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }
    if(carry) {
        p3.next = new ListNode(carry);
    }
    return p3.next;
}