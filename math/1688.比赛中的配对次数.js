/**
 * @param {number} n
 * @return {number}
 */

var numberOfMatches = function(n) {
	let res = 0;

	while (n > 1) {
		const isOdd = n % 2 !== 0;
		if (isOdd) n -= 1;
		n /= 2;
		res += n;

		if (isOdd) n += 1;
	}
	return res;
};
