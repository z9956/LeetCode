/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums = nums.sort((a, b) => a - b);

	let results = nums[0] + nums[1] + nums[2];

	for (let i = 0; i < nums.length; i++) {
		let first = i + 1;
		let last = nums.length - 1;

		while (first < last) {
			const sum = nums[i] + nums[first] + nums[last];

			if (Math.abs(target - sum) < Math.abs(target - results)) {
				results = sum;
			} else if (sum < target) {
				first++;
			} else if (sum > target) {
				last--;
			} else {
				return results;
			}
		}
	}

	return results;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
