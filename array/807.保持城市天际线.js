/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
	const top = new Array(grid[0].length).fill(0);
	const left = new Array(grid[0].length).fill(0);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] > left[i]) {
				left[i] = grid[i][j];
			}

			if (grid[j][i] > top[i]) {
				top[i] = grid[j][i];
			}
		}
	}

	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			let min = Math.min(top[i], left[j]);

			count += min - grid[i][j];
		}
	}
	return count;
};
/*
 * 从数组竖直方向（即顶部，底部）看“天际线”是：[9, 4, 8, 7]
 * 从水平水平方向（即左侧，右侧）看“天际线”是：[8, 7, 9, 3]
 *
 * [ [ 5, 7, 1, -1 ], [ 2, 0, -1, -4 ], [ -1, 5, 2, 0 ], [ 7, 4, 6, 3 ] ].flat().reduce((pre, cur) => pre + cur) 35
 * */
console.log(
	maxIncreaseKeepingSkyline([
		[3, 0, 8, 4],
		[2, 4, 5, 7],
		[9, 2, 6, 3],
		[0, 3, 1, 0],
	]),
);
