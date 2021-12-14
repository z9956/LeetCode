/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
	let cur = list1;

	for (let i = 0; i < a - 1; i++) {
		cur = cur.next;
	}

	let node = cur.next;
	for (let i = a; i < b + 1; i++) {
		node = node.next;
	}

	cur.next = list2;
	while (cur.next) {
		cur = cur.next;
	}

	cur.next = node;

	return list1;
};
