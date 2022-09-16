/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
	let map = [];

	for (let i = 0; i < mat.length; i++) {
		let count = 0;
		for (let j = 0; j < mat[i].length; j++) {
			if (mat[i][j] > 0) {
				count++;
			} else {
				break;
			}
		}
		map.push([i, count]);
	}

	return map
		.sort((a, b) => a[1] - b[1])
		.slice(0, k)
		.map(item => item[0]);
};
