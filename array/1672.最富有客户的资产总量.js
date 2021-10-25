/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let max = 0;

	for (let i = 0; i < accounts.length; i++) {
		const sum = getSum(accounts[i]);

		if (sum > max) max = sum;
	}

	return max;
};

function getSum(arr) {
	return arr.reduce((pre, cur) => pre + cur);
}

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	]),
);
