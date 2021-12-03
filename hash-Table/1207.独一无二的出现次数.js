/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
	let map = new Map();
	for (const num of arr) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	const set = new Set();
	for (const [key, value] of map) {
		if (set.has(value)) {
			return false;
		}
		set.add(value);
	}

	return map.size === set.size;
};

// var uniqueOccurrences = function(arr) {
// 	let map = new Map();
// 	for (const num of arr) {
// 		map.set(num, (map.get(num) || 0) + 1);
// 	}
//
// 	let count = 0;
//
// 	const result = Array.from(map.values()).sort((a, b) => a - b);
//
// 	for (let i = 0; i < result.length; i++) {
// 		if (result[i] === count) return false;
//
// 		count = result[i];
// 	}
//
// 	return true;
// };
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
