/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
	let max = 0;

	let amount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (!(i > 0 && nums[i] > nums[i - 1])) {
			amount = 0;
		}
		amount += nums[i];

		max = Math.max(amount, max);
	}

	return max;
};
