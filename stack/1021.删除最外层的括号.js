/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
	const res = [];
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' && stack.length === 0) {
			stack.push('(');
		} else if (s[i] === '(' && stack.length) {
			stack.push('(');
			res.push('(');
		}

		if (s[i] === ')') {
			stack.pop();
			if (stack.length) res.push(')');
		}
	}

	return res.join('');
};
