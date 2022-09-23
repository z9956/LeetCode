/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	const nextNode = node.next;
	node.next = nextNode.next;
	node.val = nextNode.val;
	nextNode.next = null;
};
