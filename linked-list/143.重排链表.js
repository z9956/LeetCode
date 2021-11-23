/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	const dummy = new ListNode(0);
	dummy.next = head;

	let slow = dummy;
	let fast = dummy;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let right = slow.next;
	let left = dummy.next;
	slow.next = null;

	right = reverseList(right);

	while (left && right) {
		let leftNext = left.next;
		let rightNext = right.next;

		right.next = left.next;
		left.next = right;
		left = leftNext;
		right = rightNext;
	}

	return dummy.next;
};

var reverseList = (head) => {
	let prev = null;
	let cur = head;

	while (head) {
		let next = cur.next;
		cur.next = prev;

		prev = cur;
		cur = next;
	}

	return prev;
};
