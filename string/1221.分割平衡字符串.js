/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let total = 0;
	let count = 0;

	for (const cur of s) {
		total += cur === 'R' ? 1 : -1;
		if (total === 0) count++;
	}

	return count;
};

console.log(balancedStringSplit('RLRRLLRLRL')); //4
