/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const results = [];

	const dfs = (index, list) => {
		if (index === nums.length) {
			return results.push(list.slice());
		}

		list.push(nums[index]);
		dfs(index + 1, list);
		list.pop();
		dfs(index + 1, list);
	};

	dfs(0, []);

	return results;
};

/*
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * */

console.log(subsets([1, 2, 3]));
