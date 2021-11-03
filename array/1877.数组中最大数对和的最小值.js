/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
	nums.sort((a, b) => a - b);
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum = Math.max(sum, nums[i] + nums[nums.length - i - 1]);
	}
	return sum;
};

console.log(minPairSum([3, 5, 2, 3])); //7
console.log(minPairSum([3, 5, 4, 2, 4, 6])); //8
