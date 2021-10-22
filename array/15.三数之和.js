/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums = nums.sort((a, b) => a - b);

	if (nums.length < 3 || !nums.length) return [];

	let results = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break;

		let first = i + 1;
		let last = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) continue;
		while (first < last) {
			const sum = nums[i] + nums[first] + nums[last];

			if (sum === 0) {
				results.push([nums[i], nums[first], nums[last]]);

				while (nums[first] === nums[first + 1]) first++;
				// while (first < last && nums[first] === nums[first + 1]) first++;
				first++;
				last--;
			} else if (sum < 0) {
				first++;
			} else if (sum > 0) {
				last--;
			}
		}
	}

	return results;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-2, 0, 0, 2, 2]));
/*
 * [-4, -1, -1, 0, 1, 2]
 *
 * cur left right
 * -4 2 -1
 * -1 -4 -1
 * -1 -1 0
 * 0 -1 1
 * 1 0 2
 * 2 1 -4
 * */
