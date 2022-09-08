/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
	let res;

	for (let i = 0; i < n; i++) {
		res ^= start + 2 * i;
	}

	return res;
};
