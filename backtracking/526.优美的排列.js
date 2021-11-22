/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
	let count = 0;

	const vis = [];

	dfs(1);

	function dfs(index) {
		if (index > n) {
			return count++;
		}

		for (let i = 1; i <= n; i++) {
			if (!vis[i]) {
				if (index % i === 0 || i % index === 0) {
					vis[i] = true;
					dfs(index + 1);
					vis[i] = false;
				}
			}
		}
	}

	return count;
};

console.log(countArrangement(2));
