/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;

	let max = 0;

	while (left < right) {
		max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}

	return max;
};

/*
暴力解 超时
var maxArea = function (height) {
	const len = height.length;
	let max = 0;

	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
		}
	}

	return max;
};*/

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); //17
