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
var sortList = function (head) {
	if (!head || !head.next) return head;

	let fast = head;
	let slow = head;
	let preSlow = null;

	while (fast && fast.next) {
		preSlow = slow;
		fast = fast.next.next;
		slow = slow.next;
	}
	preSlow.next = null;

	const left = sortList(head);
	const right = sortList(slow);
	return merge(left, right);
};

function merge(l1, l2) {
	const dummy = new ListNode(0);
	let prev = dummy;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			prev.next = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			l2 = l2.next;
		}
		prev = prev.next;
	}
	if (l1) prev.next = l1;
	if (l2) prev.next = l2;
	return dummy.next;
}
