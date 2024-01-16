/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
	let cur = head;

	for (let i = 0; i < k - 1; i++) {
		cur = cur.next;
	}

	let curNode = cur;
	let curSecond = head;

	while (cur.next) {
		cur = cur.next;
		curSecond = curSecond.next;
	}

	[curNode.val, curSecond.val] = [curSecond.val, curNode.val];

	return head;
};
