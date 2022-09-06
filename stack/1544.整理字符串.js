/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
	const res = [];

	function match(a, b) {
		return a !== b && a.toLocaleLowerCase() === b.toLocaleLowerCase();
	}

	for (let i = 0; i < s.length; i++) {
		if (res.length === 0) {
			res.push(s[i]);
			continue;
		}

		if (match(res.at(-1), s[i])) {
			res.pop();
		} else {
			res.push(s[i]);
		}
	}

	return res.join('');
};
