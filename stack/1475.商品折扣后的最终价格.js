/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
	const ans = [];
	const stack = [];

	for (let i = prices.length - 1; i >= 0; i++) {
		const cur = prices[i];
		while (stack.length && cur < stack[stack.length - 1]) {
			stack.pop();
		}

		ans[i] = stack.length ? cur - stack[stack.length - 1] : cur;
		stack.push(cur);
	}

	return ans;
};
