/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.get(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
	}

	for (let i = 0; i < t.length; i++) {
		const count = map.get(t[i]);

		if (count) {
			map.set(t[i], count - 1);
		} else {
			return t[i];
		}
	}
};

// var findTheDifference = function(s, t) {
// 	const map = {};
//
// 	for (let i = 0; i < s.length; i++) {
// 		map[s[i]] = [0, 0];
// 	}
//
// 	for (let i = 0; i < t.length; i++) {
// 		map[t[i]] = [0, 0];
// 	}
//
// 	for (let i = 0; i < s.length; i++) {
// 		map[s[i]][0]++;
// 	}
//
// 	for (let i = 0; i < t.length; i++) {
// 		map[t[i]][1]++;
// 	}
//
// 	for (let i in map) {
// 		if (map[i][0] !== map[i][1]) {
// 			return i;
// 		}
// 	}
// };

console.log(findTheDifference('a', 'aa'));
console.log(findTheDifference('abcd', 'abcde'));
