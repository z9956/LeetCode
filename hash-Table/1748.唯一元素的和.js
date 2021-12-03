/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
	let sum = 0;

	let map = new Map();

	for (const num of nums) {
		if (!map.has(num)) {
			sum += num;
			map.set(num, 1);
		} else {
			if (map.get(num) > 0) {
				sum -= num;
				map.set(num, 0);
			}
		}
	}
	return sum;
};

// var sumOfUnique = function(nums) {
// 	let sum = 0;
//
// 	let map = new Map();
//
// 	for (const num of nums) {
// 		if (map.has(num)) {
// 			map.set(num, map.get(num) + 1);
// 		} else {
// 			map.set(num, 1);
// 		}
// 	}
//
// 	map.forEach((value, key) => {
// 		if (value === 1) {
// 			sum += key;
// 		}
// 	});
//
// 	return sum;
// };
console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
