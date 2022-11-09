/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
	const res = [];

	for (let i = 0; i < index.length; i++) {
		res.splice(index[i], 0, nums[i]);
	}

	return res;
};
