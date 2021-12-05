/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
	let count = 0;

	let i = 0;

	while (i < s.length - 2) {
		const char = `${s[i]}${s[i + 1]}${s[i + 2]}`;

		const set = new Set(char.split(''));

		if (set.size === 3) {
			count++;
		}
		i++;
	}

	return count;
};

console.log(countGoodSubstrings('xyzzaz'));
console.log(countGoodSubstrings('aababcabc'));
