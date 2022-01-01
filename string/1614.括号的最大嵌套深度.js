/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
	let max = 0;
	let cur = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			cur++;
			max = Math.max(max, cur);
		} else if (s[i] === ')') {
			cur--;
		}
	}
	return max;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1')); //3 数字 8 在嵌套的 3 层括号中
