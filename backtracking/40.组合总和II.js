/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	const results = [];

	const dfs = (index, list, sum) => {
		if (sum >= target) {
			if (sum === target) {
				return results.push(list.slice());
			}
			return;
		}

		for (let i = index; i < candidates.length; i++) {
			if (i - 1 >= index && candidates[i] === candidates[i - 1]) continue;

			list.push(candidates[i]);
			dfs(i + 1, list, sum + candidates[i]);
			list.pop();
		}
	};

	dfs(0, [], 0);

	return results;
};

// var combinationSum2 = function (candidates, target) {
// 	candidates = candidates.sort((a, b) => a - b);
//
// 	const results = [];
// 	const vis = [];
//
// 	const dfs = (index, list, sum) => {
// 		if (sum >= target) {
// 			if (sum === target) return results.push(list.slice());
//
// 			return;
// 		}
//
// 		for (let i = index; i < candidates.length; i++) {
// 			if (i > 0 && candidates[i] === candidates[i - 1] && !vis[i - 1]) continue;
//
// 			if (!vis[i]) {
// 				vis[i] = true;
// 				list.push(candidates[i]);
// 				dfs(i, list, sum + candidates[i]);
// 				list.pop();
// 				vis[i] = false;
// 			}
// 		}
// 	};
//
// 	dfs(0, [], 0);
//
// 	return results;
// };

/*
*
输入: candidates =[10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
* */
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
