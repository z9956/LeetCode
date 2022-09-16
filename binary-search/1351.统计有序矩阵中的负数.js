/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
	let count = 0;

	for (let i = 0; i < grid.length; i++) {
		count += search(grid[i]);
	}

	return count;
};

var search = function(nums) {
	if (!nums.length) return 0;
	if (nums[0] < 0) return nums.length;

	const n = nums.length;
	let left = 0,
		right = n - 1;
	while (left <= right) {
		let mid = ~~((left + right) / 2);

		if (nums[mid] < 0) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return nums.length - left;
};

//执行速度更快
/*var countNegatives = function(grid) {
	let count = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] < 0) {
				count += grid[i].length - j;
				break;
			}
		}
	}

	return count;
};*/
