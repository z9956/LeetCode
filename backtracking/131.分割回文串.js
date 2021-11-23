/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const res = [];
	const map = new Map();

	const dfs = (index, path) => {
		if (index === s.length) {
			return res.push(path.slice());
		}

		for (let i = index; i < s.length; i++) {
			const exist = map.get(`${index}${i}`);
			if (exist === false) continue;

			if (exist || isPalindrome(index, i, s, map)) {
				path.push(s.slice(index, i + 1));
				dfs(i + 1, path);
				path.pop();
			}
		}
	};

	dfs(0, []);
	return res;
};

var isPalindrome = function (left, right, s, map) {
	while (left < right) {
		if (s[left] !== s[right]) {
			map.set(`${left}${right}`, false);
			return false;
		}

		left++;
		right--;
	}
	map.set(`${left}${right}`, true);

	return true;
};

/*
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * */

console.log(partition('aab'));
