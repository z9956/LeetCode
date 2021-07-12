/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;

  let cur = head;
  let len = 1;

  while (cur.next) {
    cur = cur.next;
    len++;
  }

  let move = len - (k % len);
  cur.next = head;

  while (move) {
    cur = cur.next;
    move--;
  }

  let ans = cur.next;
  cur.next = null;
  return ans;
};

/*
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * */
