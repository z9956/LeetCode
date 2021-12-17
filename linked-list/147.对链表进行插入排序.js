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
var insertionSortList = function (head) {
	let cur = head;
	let sorted = new ListNode(0);

	while (cur) {
		let next = cur.next;
		let sortedCur = sorted;

		while (sortedCur.next && sortedCur.next.val < cur.val) {
			sortedCur = sortedCur.next;
		}

		cur.next = sortedCur.next;
		sortedCur.next = cur;

		cur = next;
	}

	return sorted.next;
};
