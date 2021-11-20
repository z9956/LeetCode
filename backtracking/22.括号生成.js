/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const results = [];

	const dfs = (left, right, str) => {
		if (str.length === 2 * n) return results.push(str);

		if (left > 0) {
			dfs(left - 1, right, str + '(');
		}

		if (left < right) {
			dfs(left, right - 1, str + ')');
		}
	};

	dfs(n, n, '');

	return results;
};

/*
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * */

console.log(generateParenthesis(3));
