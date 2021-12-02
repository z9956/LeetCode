/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}
	}

	let first = map.get(s[0]);
	for (const value of map.values()) {
		if (value !== first) {
			return false;
		}
	}
	return true;
};

console.log(areOccurrencesEqual('tveixwaeoezcf'));
console.log(areOccurrencesEqual('abacbc'));
console.log(areOccurrencesEqual('vvvvvvvvvvvvvvvvvvv'));
console.log(areOccurrencesEqual('wzkpzzwzpzkwkpkppzkppkpkwwkzzzwwpwwk'));
