/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
	let num = 0;

	for (let i = 0; i < nums.length - 2; i++) {
		let m = nums[i] + diff;
		let n = m + diff;
		nums.indexOf(m) !== -1 && nums.indexOf(n) !== -1 && num++;
	}
	return num;
};
