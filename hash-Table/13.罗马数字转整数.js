/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	]);

	let count = 0;

	for (let i = 0; i < s.length; i++) {
		const cur = map.get(s[i]);
		const prev = map.get(s[i + 1]);

		if (i < s.length - 1 && cur < prev) {
			count -= cur;
		} else {
			count += cur;
		}
	}

	return count;
};

/*
当小值在大值的左边，则减小值，如 IV=5-1=4
当小值在大值的右边，则加小值，如 VI=5+1=6

 * 输入: s = "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * */

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('IV'));
