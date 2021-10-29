/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	// let originalCandies = [...candies];
	// let max = candies.sort((a, b) => b - a)[0];
	const max = Math.max(...candies);

	let results = [];

	for (let i = 0; i < candies.length; i++) {
		const num = candies[i] + extraCandies;
		results.push(num >= max);
	}

	return results;
};
