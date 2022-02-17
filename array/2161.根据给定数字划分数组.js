/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
	const start = [];
	const end = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === pivot) {
			end.unshift(nums[i]);
		} else if (nums[i] > pivot) {
			end.push(nums[i]);
		} else if (nums[i] < pivot) {
			start.push(nums[i]);
		}
	}

	return start.concat(end);
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); //[9,5,3,10,10,12,14]
// console.log(pivotArray([-3, 4, 3, 2], 2)); //[9,5,3,10,10,12,14]
