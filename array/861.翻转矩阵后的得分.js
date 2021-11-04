/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
	for (let i = 0; i < grid.length; i++) {
		if (grid[i][0] === 0) {
			for (let j = 0; j < grid[i].length; j++) {
				// grid[i][j] = grid[i][j] === 0 ? 1 : 0;
				grid[i][j] ^= 1;
			}
		}
	}

	for (let i = 1; i < grid[0].length; i++) {
		let count = 0;
		for (let j = 0; j < grid.length; j++) {
			if (grid[j][i] === 0) count++;
		}
		if (count > grid.length / 2) {
			for (let j = 0; j < grid.length; j++) {
				grid[j][i] ^= 1;
			}
		}
	}

	let res = 0;
	for (const gridElement of grid) {
		res += parseInt(gridElement.join(''), 2);
	}

	return res;
};

console.log(
	matrixScore([
		[0, 0, 1, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
	]),
); //39
