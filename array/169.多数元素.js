/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
	let count = Math.trunc(nums.length / 2);

	let map = {};

	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		map[item] = map[item] ? map[item] + 1 : 1;

		if (map[item] > count) {
			return item;
		}
	}
};

// var majorityElement = function (nums) {
// 	let count = Math.trunc(nums.length / 2);
//
// 	let map = {};
//
// 	for (let key in nums) {
// 		const item = nums[key];
// 		map[item] = map[item] ? map[item] + 1 : 1;
//
// 		if (map[item] > count) {
// 			return item;
// 		}
// 	}
// };

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
