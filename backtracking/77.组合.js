/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	const arr = [];
	const results = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	dfs(1, []);

	function dfs(index, path) {
		if (path.length === k) {
			return results.push(path.slice());
		}
		for (let i = index; i <= arr.length; i++) {
			path.push(i);
			dfs(i + 1, path);
			path.pop();
		}
	}

	return results;
};

/*
* 输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
* */
console.log(combine(4, 2));
