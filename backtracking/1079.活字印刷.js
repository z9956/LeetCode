/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
	tiles = tiles
		.split('')
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join('');

	const results = [];
	const vis = [];

	const dfs = (str) => {
		if (str.length) {
			results.push(str);
		}

		for (let i = 0; i < tiles.length; i++) {
			if (i > 0 && tiles[i] === tiles[i - 1] && !vis[i - 1]) continue;

			if (!vis[i]) {
				vis[i] = true;
				str += tiles[i];
				dfs(str);
				str = str.substr(0, str.length - 1);
				vis[i] = false;
			}
		}
	};

	dfs('');

	return results.length;
};

/*var numTilePossibilities = function (tiles) {
	const set = new Set();
	const vis = [];

	const dfs = (str) => {
		if (str.length) {
			set.add(str);
		}

		for (let i = 0; i < tiles.length; i++) {
			if (!vis[i]) {
				vis[i] = true;
				str += tiles[i];
				dfs(str);
				str = str.substr(0, str.length - 1);
				vis[i] = false;
			}
		}
	};

	dfs('');

	return set.size;
};*/

/*
 * 输入："AAB"
 * 输出：8
 * 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
 * */

console.log(numTilePossibilities('AAB'));
