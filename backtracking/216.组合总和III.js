/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const results = [];
	const map = new Set();

	const dfs = (index, list, sum) => {
		if (sum >= n) {
			if (sum === n && list.length === k) return results.push(list.slice());

			return;
		}

		for (let i = index; i < candidates.length; i++) {
			if (map.has(candidates[i])) continue;

			list.push(candidates[i]);
			map.add(candidates[i]);
			dfs(i, list, sum + candidates[i]);
			list.pop();
			map.delete(candidates[i]);
		}
	};

	dfs(0, [], 0);

	return results;
};

/*
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * */

console.log(combinationSum3(3, 7));
