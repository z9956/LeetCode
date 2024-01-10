/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
	head = head.next;
	let cur = head;
	while (cur && cur.next) {
		if (cur.next.val) {
			cur.val += cur.next.val;
			cur.next = cur.next.next;
		} else {
			cur.next = cur.next.next;
			cur = cur.next;
		}
	}
	return head;
};
