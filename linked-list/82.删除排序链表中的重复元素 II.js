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
var deleteDuplicates = function (head) {
	if (!head) return head;

	let result = new ListNode(0, head);
	let current = result;

	while (current.next && current.next.next) {
		if (current.next.val === current.next.next.val) {
			const val = current.next.val;
			while (current.next && current.next.val === val) {
				current.next = current.next.next;
			}
		} else {
			current = current.next;
		}
	}
	return result.next;
};

/*
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * */
