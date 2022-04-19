/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
	const stack = [];
	const _stack = [];

	for (let i = 0; i < n; i++) {
		_stack.push(i + 1);
		stack.push('Push');

		if (_stack[_stack.length - 1] !== target[_stack.length - 1]) {
			stack.push('Pop');
			_stack.pop();
		}
		if (target.length === _stack.length) return stack;
	}
	return stack;
};
