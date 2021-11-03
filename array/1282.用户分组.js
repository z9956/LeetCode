/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
	const map = new Map();
	let results = [];

	for (let i = 0; i < groupSizes.length; i++) {
		if (map.has(groupSizes[i])) {
			const same = map.get(groupSizes[i]);
			const len = groupSizes[i];

			if (same.length % len === 0) {
				while (same.length) {
					results.push(same.splice(0, len));
				}
			}

			same.push(i);
		} else {
			map.set(groupSizes[i], [i]);
		}
	}

	return [...results, ...map.values()];
};

/*
* 解法二
var groupThePeople = function (groupSizes) {
	const map = new Map();
	let results = [];

	for (let i = 0; i < groupSizes.length; i++) {
		if (map.has(groupSizes[i])) {
			const same = map.get(groupSizes[i]);

			same.push(i);
		} else {
			map.set(groupSizes[i], [i]);
		}
	}

	for (const result of map) {
		const len = result[0];
		const list = result[1];

		if (list.length % len === 0) {
			while (list.length) {
				results.push(list.splice(0, len));
			}
		} else {
			results.push(result);
		}
	}

	return results;
};
* */

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); //[[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([3, 4, 3, 3, 4, 4, 3, 4, 3, 3])); //[[0,2,3],[6,8,9],[1,4,5,7]]
