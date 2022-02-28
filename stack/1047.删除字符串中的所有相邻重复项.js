/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	const stack = [];

	for (const sElement of s) {
		if (stack[stack.length - 1] === sElement) {
			stack.pop();
		} else {
			stack.push(sElement);
		}
	}

	return stack.join('');
};
