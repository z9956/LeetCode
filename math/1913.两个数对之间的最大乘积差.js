/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
	nums.sort((a, b) => b - a);

	return nums[0] * nums[1] - nums.at(-1) * nums.at(-2);
};
