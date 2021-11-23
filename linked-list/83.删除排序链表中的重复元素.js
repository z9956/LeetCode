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
	let currentNode = head;

	while (currentNode) {
		if (currentNode.val === currentNode.next.val) {
			currentNode.next = currentNode.next.next;
		}

		currentNode = currentNode.next;
	}
};

/*
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * */
