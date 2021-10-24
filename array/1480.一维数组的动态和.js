/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};

// var runningSum = function (nums) {
// 	let results = [];
//
// 	for (let i = 0; i < nums.length; i++) {
// 		if (i === 0) {
// 			results.push(nums[i]);
// 			continue;
// 		}
//
// 		results.push(getSum(nums.slice(0, i + 1)));
// 	}
//
// 	return results;
// };

// function getSum(arr) {
// 	return arr.reduce((pre, cur) => pre + cur);
// }

// console.log(runningSum([3, 1, 2, 10, 1])); //[1,3,6,10]
