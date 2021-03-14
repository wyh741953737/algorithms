// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求删除的阶段
// 现有一个链表 --head=[4,5,1,9]
// 输入head=[4,5,1,9], node=5
// 输出：[4,1,9]
// 思路：无法直接获取被删除节点的上一个节点，但是可以将下一个节点赋值到当前节点，再删除下一个节点
// 时间复杂度O(1)， 空间复杂度O(1)
const deleteNode =  function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

const arr = [4,5,1,9];
