/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//搜索回溯
var permuteUnique = function (nums) {
	nums = nums.sort((a, b) => a - b);

	const results = [];
	const path = [];

	dfs([]);

	function dfs(vis) {
		if (path.length === nums.length) {
			return results.push(path.slice());
		}

		for (let i = 0; i < nums.length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) continue;

			if (!vis[i]) {
				vis[i] = true;
				path.push(nums[i]);
				dfs(vis);
				path.pop();
				vis[i] = false;
			}
		}
	}

	return results;
};

/*
* 输入：nums = [1,1,2]
  输出：
	[[1,1,2],
 	[1,2,1],
	[2,1,1]]
* */
console.log(permuteUnique([1, 1, 2]));
