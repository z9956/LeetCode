var Solution = function (head) {
	this.head = [];
	while (head) {
		this.head.push(head.val);
		head = head.next;
	}
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
	return this.head[Math.floor(Math.random() * this.head.length)];
};
