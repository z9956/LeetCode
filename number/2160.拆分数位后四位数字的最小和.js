/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
	const str = String(num)
		.split('')
		.sort((a, b) => a - b);

	return Number(str[0] + str[2]) + Number(str[1] + str[3]);
};
