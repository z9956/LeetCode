/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
	if (target.length !== arr.length) return false;

	const map = new Map();

	for (let i = 0; i < target.length; i++) {
		if (map.has(target[i])) {
			map.set(target[i], map.get(target[i]) + 1);
		} else {
			map.set(target[i], 1);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) - 1);
			if (map.get(arr[i]) === 0) {
				map.delete(arr[i]);
			}
		} else {
			return false;
		}
	}

	return true;
};

// var canBeEqual = function(target, arr) {
// 	target.sort((a, b) => a - b);
// 	arr.sort((a, b) => a - b);
//
// 	return target.join('') === arr.join('');
// }
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
