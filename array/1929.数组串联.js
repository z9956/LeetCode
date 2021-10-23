/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	//return [...nums, ...nums];

	let len = nums.length;
	for (let i = 0; i < len; i++) {
		nums.push(nums[i]);
	}

	return nums;
};
