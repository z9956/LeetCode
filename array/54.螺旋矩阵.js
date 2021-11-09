/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (matrix.length === 0) return [];

	const results = [];
	let top = 0;
	let bottom = matrix.length - 1;
	let left = 0;
	let right = matrix[0].length - 1;

	while (top < bottom && left < right) {
		for (let i = left; i < right; i++) {
			results.push(matrix[top][i]);
		}

		for (let i = top; i < bottom; i++) {
			results.push(matrix[i][right]);
		}

		for (let i = right; i > left; i--) {
			results.push(matrix[bottom][i]);
		}

		for (let i = bottom; i > top; i--) {
			results.push(matrix[i][left]);
		}

		top++;
		left++;
		right--;
		bottom--;
	}

	if (top === bottom) {
		for (let i = left; i <= right; i++) {
			results.push(matrix[top][i]);
		}
	} else if (left === right) {
		for (let i = top; i <= bottom; i++) {
			results.push(matrix[i][left]);
		}
	}

	return results;
};
/*
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * */
console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
);

console.log(spiralOrder([[2, 3]]));

console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	]),
);
console.log(spiralOrder([[2], [3]]));
