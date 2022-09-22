/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
	let map = {};

	let min;
	for (let i = 0; i < s.length; i++) {
		const cur = s[i];

		if (!map[cur]) {
			map[cur] = [i];
		} else if (map[cur]) {
			map[cur].push(i);
			min = min ? Math.min(min, i) : i;
		}
	}

	return s[min];
};
