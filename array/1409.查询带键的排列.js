/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
//暴力解
var processQueries = function (queries, m) {
	let arr = [];
	for (let i = 1; i <= m; i++) {
		arr.push(i);
	}
	const results = [];

	for (let i = 0; i < queries.length; i++) {
		const index = arr.indexOf(queries[i]);

		if (index !== -1) {
			results.push(index);
			arr.splice(index, 1);
			arr.unshift(queries[i]);
		}
	}
	return results;
};

console.log(processQueries([3, 1, 2, 1], 5)); //[2,1,2,1]
