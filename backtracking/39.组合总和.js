/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const results = [];

	const dfs = (index, list, sum) => {
		if (sum >= target) {
			if (sum === target) return results.push(list.slice());

			return;
		}

		for (let i = index; i < candidates.length; i++) {
			list.push(candidates[i]);
			dfs(i, list, sum + candidates[i]);
			list.pop();
		}
	};

	dfs(0, [], 0);

	return results;
};

/*
 * 输入: candidates = [2,3,6,7], target = 7
 * 输出: [[7],[2,2,3]]
 * */

console.log(combinationSum([2, 3, 6, 7], 7));
