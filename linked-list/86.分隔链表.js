/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	let small = new ListNode(0);
	let large = new ListNode(0);
	let smallList = small;
	let largeList = large;

	let current = head;

	while (current) {
		if (current.val < x) {
			small.next = current;
			small = small.next;
		} else {
			large.next = current;
			large = large.next;
		}

		current = current.next;
	}

	large.next = null;
	small.next = largeList.next;
	return smallList.next;
};
