/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//单调栈解
var nextGreaterElement = function (nums1, nums2) {
	const map = new Map();
	const stack = [];
	const ans = [];

	nums2.forEach((num) => {
		while (stack.length && num > stack[stack.length - 1]) {
			map.set(stack.pop(), num);
		}
		stack.push(num);
	});
	stack.forEach((item) => map.set(item, -1));
	nums1.forEach((item) => ans.push(map.get(item)));

	return ans;
};

// var nextGreaterElement = function (nums1, nums2) {
// 	let results = [];
//
// 	let i = 0;
// 	while (i < nums1.length) {
// 		let index = nums2.indexOf(nums1[i]);
// 		let list = nums2.slice(index);
//
// 		const item = list.find((num) => num > nums1[i]) ?? -1;
//
// 		results.push(item);
//
// 		i++;
// 	}
//
// 	return results;
// };

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
