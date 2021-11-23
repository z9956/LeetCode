/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	const n = nums.length;
	let left = 0,
		right = n - 1;
	while (left <= right) {
		let mid = ~~((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return left;
};
