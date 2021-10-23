/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
	let results = [];

	for (let i = 0; i < nums.length; i++) {
		results.push(nums[nums[i]]);
	}
	return results;
};
