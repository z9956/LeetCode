/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast) {
    if (fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

/*
* 输入：head = [3,2,0,-4], pos = 1
* 输出：true
* 解释：链表中有一个环，其尾部连接到第二个节点。
* */
