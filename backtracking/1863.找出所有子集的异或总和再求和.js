/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
	let sum = 0;

	const dfs = (index, val) => {
		if (index === nums.length) {
			return (sum += val);
		}

		dfs(index + 1, val ^ nums[index]);
		dfs(index + 1, val);
	};

	dfs(0, 0);

	return sum;
};

/*先求子集后求异或总和
* var subsetXORSum = function (nums) {
	const results = [];
	let sum = 0;

	const dfs = (index, list) => {
		if (index === nums.length) {
			sum += list.reduce((a, b) => a ^ b, 0);
			return results.push(list.slice());
		}

		list.push(nums[index]);
		dfs(index + 1, list);
		list.pop();
		dfs(index + 1, list);
	};

	dfs(0, []);

	return sum;
};
* */

/*
 * 输入：nums = [1,3]
 * 输出：6
 * */

console.log(subsetXORSum([1, 3]));
