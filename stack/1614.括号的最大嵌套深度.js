/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
	let max = 0;
	let cur = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			max = Math.max(max, ++cur);
		} else if (s[i] === ')') {
			cur--;
		}
	}
	return max;
};
