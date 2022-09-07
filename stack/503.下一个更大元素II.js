/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
	const stack = [];
	let len = nums.length;

	let res = new Array(len).fill(-1);

	for (let i = 0; i < len * 2; i++) {
		let num = nums[i % len];
		while (stack.length && num > nums[stack[stack.length - 1]]) {
			const index = stack.pop();
			res[index] = num;
		}
		stack.push(i % len);
	}

	return res;
}

// console.log(nextGreaterElements([1, 5, 3, 6, 8]));
//

/*
* 测试用例:[1,5,3,6,8]
	期望结果:[5,6,6,8,-1]
* */
// console.log(nextGreaterElements([1, 2, 3, 4, 3]));
console.log(nextGreaterElements([1, 2, 1]));

/*
* var nextGreaterElements = function(nums) {
	const res = [];

	let index = 0;

	while (index < nums.length) {
		let max = -1;

		let arr = nums.slice(index).concat(nums.slice(0, index));

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > nums[index]) {
				max = arr[i];
				break;
			}
		}

		res.push(max);
		max = -1;
		index++;
	}
	return res;
};
* */
