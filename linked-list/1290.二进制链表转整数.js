/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
	let count = '';
	while (head) {
		count += head.val;
		head = head.next;
	}
	return parseInt(count, 2);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*var getDecimalValue = function(head) {
	let count = 0;
	while (head) {
		count = count * 2 + head.val;
		head = head.next;
	}
	return count;
};*/
