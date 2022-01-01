/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
	if (rings.length < 6) return 0;

	let map = new Map();

	for (let i = 0; i < rings.length; i++) {
		if (['R', 'G', 'B'].includes(rings[i])) {
			const isExist = map.get(rings[i + 1]);

			if (isExist) {
				map.set(rings[i + 1], isExist.add(rings[i]));
			} else {
				map.set(rings[i + 1], new Set(rings[i]));
			}
		}
	}

	let count = 0;

	for (const [, val] of map) {
		if (val.size === 3) count++;
	}

	return count;
};

console.log(countPoints('B0B6G0R6R0R6G9'));
