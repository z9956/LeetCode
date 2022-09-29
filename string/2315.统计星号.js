/**
 * @param {string} s
 * @return {number}
 */

var countAsterisks = function(s) {
	let str = s
		.split('|')
		.filter((item, index) => index % 2 == 0)
		.join('');

	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '*') {
			count++;
		}
	}
	return count;
};

/*
var countAsterisks = function(s) {
	let ans = 0;
	let flag = false;

	for (let char of s) {
		if (char === '|') {
			flag = !flag;
		} else if (char === '*' && !flag) {
			ans++;
		}
	}

	return ans;
};
*/

/*var countAsterisks = function(s) {
	return s
		.split(/\|[^\|]*\|/)
		.join('')
		.replace(/[^\*]/g, '').length;
};*/
