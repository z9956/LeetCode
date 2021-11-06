/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const results = [];
	const map = new Set();

	dfs([]);

	function dfs(path) {
		if (path.length === nums.length) {
			return results.push(path.slice());
		}

		for (const num of nums) {
			if (map.has(num)) continue;

			path.push(num);
			map.add(num);
			dfs(path);
			path.pop();
			map.delete(num);
		}
	}

	return results;
};

console.log(permute([1, 2, 3])); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
