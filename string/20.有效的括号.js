/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
	let stack = [];
	let map = {
		'(': ')',
		'[': ']',
		'{': '}',
	};
	for (let i = 0; i < s.length; i++) {
		let c = s[i];
		if (c in map) {
			stack.push(c);
		} else {
			if (stack.length === 0) {
				return false;
			}
			let last = stack.pop();
			if (map[last] !== c) {
				return false;
			}
		}
	}
	return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('([]){}[]()'));
