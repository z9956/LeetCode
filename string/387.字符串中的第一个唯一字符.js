/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		const cur = map.get(s[i]);

		if (cur) {
			map.set(s[i], cur + 1);
		} else {
			map.set(s[i], 1);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) {
			return i;
		}
	}

	return -1;
};
