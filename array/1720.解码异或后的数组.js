/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
	const n = encoded.length + 1;
	const arr = new Array(n).fill(0);
	arr[0] = first;

	for (let i = 1; i < n; i++) {
		arr[i] = arr[i - 1] ^ encoded[i - 1];
	}
	return arr;
};
/*
* [6, 2, 7, 3], 4, [4,0,0,0]
* 4 ^ 6 2 [4,2,0,0]
* 2 ^ 2 0 [4,2,0,0]
* 0 ^ 7 7 [4,2,7,0]
* 7 ^ 3 4 [4,2,7,4]
* */
console.log(decode([6, 2, 7, 3], 4));
