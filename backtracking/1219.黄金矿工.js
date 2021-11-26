/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
	if (grid.length === 0) return 0;

	let res = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			res = Math.max(res, dfs(grid, i, j));
		}
	}

	function dfs(grid, x, y) {
		if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) return 0;

		let temp = grid[x][y];

		grid[x][y] = 0;

		const up = dfs(grid, x, y - 1);
		const down = dfs(grid, x, y + 1);
		const left = dfs(grid, x - 1, y);
		const right = dfs(grid, x + 1, y);

		const max = Math.max(up, down, left, right);

		grid[x][y] = temp;
		return grid[x][y] + max;
	}

	return res;
};
/*
* 输入：grid = [[0,6,0],[5,8,7],[0,9,0]]
输出：24
解释：
[[0,6,0],
 [5,8,7],
 [0,9,0]]
一种收集最多黄金的路线是：9 -> 8 -> 7。
* */

console.log(
	getMaximumGold([
		[0, 6, 0],
		[5, 8, 7],
		[0, 9, 0],
	]),
);
