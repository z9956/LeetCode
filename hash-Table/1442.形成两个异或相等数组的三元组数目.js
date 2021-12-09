/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
	const hash = new Map();
	const total = new Map();
	let count = 0;
	let s = 0;

	for (const [key, val] of arr.entries()) {
		const xor = s ^ val;
		if (hash.has(xor)) {
			count += hash.get(xor) * key - total.get(xor);
		}

		hash.set(s, (hash.get(s) || 0) + 1);
		total.set(s, (total.get(s) || 0) + key);
		s = xor;
	}

	return count;
};

// var countTriplets = function(arr) {
// 		const len = arr.length;
// 		const list = [0];
//
// 	for (const num of arr) {
// 		list.push(list[list.length - 1] ^ num);
// 	}
//
// 	let count = 0;
//
// 	for (let i = 0; i < len; i++) {
// 		for (let j = i + 1; j < len; j++) {
// 			if (list[i] === list[j + 1]) count += j - i;
// 		}
// 	}
//
// 	return count;
// };


console.log(countTriplets([2, 3, 1, 6, 7]));