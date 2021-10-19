/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let map = {};

	for (let num of nums) {
		if (map[num]) return true;

		map[num] = 1;
	}
	return false;
};
