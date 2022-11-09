/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
	let sum = 0;
	let product = 1;

	for (const num of String(n)) {
		sum += +num;
		product *= +num;
	}

	return product - sum;
};

console.log(subtractProductAndSum(234)); //15
