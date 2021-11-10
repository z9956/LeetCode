/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	const matrix = new Array(n).fill(0).map(() => new Array(0).fill(0));
	let num = 1;

	let top = 0;
	let bottom = n - 1;
	let left = 0;
	let right = n - 1;

	while (top < bottom && left < right) {
		for (let i = left; i < right; i++) {
			matrix[top][i] = num;
			num++;
		}

		for (let i = top; i < bottom; i++) {
			matrix[i][right] = num;
			num++;
		}

		for (let i = right; i > left; i--) {
			matrix[bottom][i] = num;
			num++;
		}

		for (let i = bottom; i > top; i--) {
			matrix[i][left] = num;
			num++;
		}

		top++;
		left++;
		right--;
		bottom--;
	}

	if (top === bottom) {
		for (let i = left; i <= right; i++) {
			matrix[top][i] = num;
			num++;
		}
	} else if (left === right) {
		for (let i = top; i <= bottom; i++) {
			matrix[i][left] = num;
			num++;
		}
	}

	return matrix;
};

/*
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * */
console.log(generateMatrix(3));
