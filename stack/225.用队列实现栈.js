var MyStack = function() {
	this.queue = [];
	this._queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
	while (this.queue.length > 1) {
		this._queue.push(this.queue.shift());
	}

	let ans = this.queue.shift();
	while (this._queue.length) {
		this.queue.push(this._queue.shift());
	}

	return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	return this.queue.slice(-1)[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
