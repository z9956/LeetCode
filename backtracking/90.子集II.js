/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	nums = nums.sort((a, b) => a - b);

	const results = [];

	const dfs = (index, list) => {
		results.push(list.slice(0));

		if (index > nums.length - 1) return;

		for (let i = index; i < nums.length; i++) {
			/*
			 * [1, 2, 2]
			 * nums[2] = 2, nums[1] = 2
			 * */
			if (i > index && nums[i] === nums[i - 1]) continue;

			list.push(nums[i]);
			dfs(i + 1, list);
			list.pop();
		}
	};

	dfs(0, []);

	return results;
};

/*
 var subsetsWithDup = function (nums) {
	nums = nums.sort((a, b) => a - b);

	const results = [];
	const path = [];

	const dfs = (index, nums) => {
		results.push(path.slice(0));

		if (index > nums.length - 1) return;

		for (let i = index; i < nums.length; i++) {
			if (i > index && nums[i] === nums[i - 1]) continue;

			path.push(nums[i]);
			dfs(i + 1, nums);
			path.pop();
		}
	};

	dfs(0, nums);

	return results;
};
 * */

/*
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * */

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([4, 1, 0]));
