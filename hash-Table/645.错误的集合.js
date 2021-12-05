/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
	const map = new Map();
	const results = [];

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	for (let i = 1; i <= nums.length; i++) {
		const num = map.get(i) || 0;

		if (num === 2) {
			results[0] = i;
		} else if (num === 0) {
			results[1] = i;
		}
	}

	return results;
};

console.log(findErrorNums([1, 2, 2, 4]));
