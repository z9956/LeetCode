/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
	let results = [];

	let i = 2;

	while (i <= nums.length) {
		const slice = nums.slice(i - 2, i);

		if (slice.length) {
			const list = [];
			for (let j = 0; j < slice[0]; j++) {
				list.push(slice[1]);
			}
			results = results.concat(list);
		}

		i += 2;
	}

	return results;
};

console.log(decompressRLElist([1, 2, 3, 4])); //[ 2, 4, 4, 4 ]
console.log(decompressRLElist([1, 1, 2, 3])); //[ 1, 3, 3 ]
