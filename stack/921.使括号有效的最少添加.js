/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
	const stack = [];

	for (const cur of s) {
		if (stack.length && stack[0] === '(' && cur === ')') {
			stack.shift();
		} else {
			stack.unshift(cur);
		}
	}

	return stack.length;
};