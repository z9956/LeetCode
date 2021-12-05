/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
	if (s.length !== goal.length) return false;

	if (s === goal) return s.length > new Set(s).size;

	let a = '';
	let b = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== goal[i]) {
			a = s[i] + a;
			b += goal[i];
		}
	}

	return a.length === 2 && a === b;
};
console.log(buddyStrings('ab', 'ba'));
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));