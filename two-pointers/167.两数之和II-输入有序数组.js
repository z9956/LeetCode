/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//有序数组,首尾双时针查找 O(N)
var twoSum = function (numbers, target) {
	let i = 0;
	let j = numbers.length - 1;

	while (i < j) {
		const sum = numbers[i] + numbers[j];
		if (sum === target) return [i + 1, j + 1];

		sum > target ? j-- : i++;
	}
};

var twoSum2 = function (numbers, target) {
	let i = 0;
	let j = 1;

	while (i < numbers.length) {
		if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];

		if (j === numbers.length - 1) {
			i++;
			j = i + 1;
		} else {
			j++;
		}
	}
};

/*
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 *
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 *
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 *
 * [1, 2, 3, 4, 4, 9, 56, 90]
 * 8
 * */
