function gcd(a, b) {
	while (a !== 0) {
		[a, b] = [b % a, a];
	}
	return b;
}

var insertGreatestCommonDivisors = function (head) {
	let cur = head;

	let preVal = cur.val;

	while (cur.next) {
		const node = new ListNode(gcd(preVal, cur.next.val));

		preVal = cur.next.val;
		node.next = cur.next;
		cur.next = node;

		cur = cur.next.next;
	}

	return head;
};
