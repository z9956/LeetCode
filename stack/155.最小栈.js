var MinStack = function() {
	this.stack = [];
	this.minStack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	this.stack.push(val);
	this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.stack.pop();
	this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.minStack[this.minStack.length - 1];
};
