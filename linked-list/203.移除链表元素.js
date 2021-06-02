/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  let currentNode = head;

  while (currentNode.next) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head.val === val ? head.next : head;
};

/*
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 * */
