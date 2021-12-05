/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
	let map = new Map(arr2.map((v) => [v, 0]));

	let unique = [];
	for (let i = 0; i < arr1.length; i++) {
		const num = arr1[i];

		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			unique.push(num);
		}
	}

	const results = [];
	unique.sort((a, b) => a - b);

	map.forEach((v, k) => {
		for (let i = 0; i < v; i++) {
			results.push(k);
		}
	});

	return [...results, ...unique];
};

console.log(
	relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
);
